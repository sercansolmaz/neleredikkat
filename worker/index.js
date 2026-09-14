// NelerDikkat — Cloudflare Worker
// Statik site (Workers Static Assets) + KV-backed /api/log-search endpoint.
// KV: ND_LOGS — "log:<query>" → {count,lastFound,lastMissing,lastSearched}
// Admin gate: /admin/* ve GET /api/log-search şifre korumalı (ADMIN_PASSWORD secret).

// CORS: site origin'leri
const ALLOWED_ORIGINS = new Set([
  'https://neleredikkat.com',
  'https://www.neleredikkat.com',
  'http://localhost:3000'
]);

function corsHeaders(origin) {
  const h = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
  }
  return h;
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...corsHeaders(origin)
    }
  });
}

// ---------- Admin gate yardımcıları ----------

function parseCookies(request) {
  const header = request.headers.get('Cookie') || '';
  const out = {};
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx > -1) out[part.slice(0, idx).trim()] = part.slice(idx + 1).trim();
  }
  return out;
}

// Şifreden deterministik token türet (şifreyi cookie'ye yazmadan karşılaştır)
async function adminToken(env) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', enc.encode(env.ADMIN_PASSWORD || ''), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode('nd-admin-v1'));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const NOINDEX = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };

function loginPage(hasError, next) {
  const safeNext = (next && next.startsWith('/admin')) ? next : '/admin/missing-searches/';
  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Yönetim Girişi | NelerDikkat</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
         background:#0f172a; color:#e2e8f0; min-height:100vh;
         display:flex; align-items:center; justify-content:center; padding:1rem; }
  .card { background:#1e293b; border:1px solid #334155; border-radius:1.25rem;
          padding:2.5rem; width:100%; max-width:24rem; }
  .logo { display:flex; align-items:center; gap:.6rem; margin-bottom:1.5rem; }
  .logo .mark { width:2.5rem; height:2.5rem; border-radius:.75rem; background:#059669;
                display:flex; align-items:center; justify-content:center; font-size:1.2rem; }
  .logo .name { font-weight:800; font-size:1.15rem; color:#fff; }
  .logo .name span { color:#34d399; }
  h1 { font-size:1rem; font-weight:700; color:#fff; margin-bottom:.25rem; }
  p.sub { font-size:.8rem; color:#94a3b8; margin-bottom:1.5rem; }
  label { display:block; font-size:.7rem; font-weight:700; text-transform:uppercase;
          letter-spacing:.08em; color:#94a3b8; margin-bottom:.4rem; }
  input[type=password] { width:100%; padding:.8rem 1rem; border-radius:.75rem;
          border:2px solid #334155; background:#0f172a; color:#fff; font-size:.95rem;
          outline:none; margin-bottom:1rem; }
  input[type=password]:focus { border-color:#059669; }
  button { width:100%; padding:.8rem; border:none; border-radius:.75rem; background:#059669;
           color:#fff; font-size:.9rem; font-weight:700; cursor:pointer; }
  button:hover { background:#047857; }
  .err { background:#7f1d1d33; border:1px solid #b91c1c66; color:#fca5a5;
         font-size:.8rem; padding:.6rem .8rem; border-radius:.6rem; margin-bottom:1rem; }
</style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <div class="mark">&#10003;</div>
      <div class="name">Neler<span>Dikkat</span></div>
    </div>
    <h1>Yönetim Girişi</h1>
    <p class="sub">Bu alan yalnızca site yönetimi içindir.</p>
    ${hasError ? '<div class="err">Şifre hatalı. Tekrar dene.</div>' : ''}
    <form method="POST" action="/admin/login">
      <input type="hidden" name="next" value="${safeNext}">
      <label for="password">Şifre</label>
      <input type="password" id="password" name="password" required autofocus>
      <button type="submit">Giriş Yap</button>
    </form>
  </div>
</body>
</html>`;
  return html;
}

async function isAdmin(request, env) {
  const cookies = parseCookies(request);
  return cookies.nd_admin === (await adminToken(env));
}

// ---------- Ana fetch ----------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    // ----- Admin kapısı -----
    if (url.pathname === '/admin/login' && request.method === 'POST') {
      const form = await request.formData();
      const password = String(form.get('password') || '');
      const next = String(form.get('next') || '/admin/missing-searches/');
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';

      // Brute-force koruması: 5 deneme / 15 dk
      const rlKey = `adminrl:${ip}`;
      const tries = parseInt((await env.ND_LOGS.get(rlKey)) || '0', 10);
      if (tries >= 5) {
        return new Response('Çok fazla deneme. 15 dakika sonra tekrar dene.', { status: 429, headers: NOINDEX });
      }

      if (password !== (env.ADMIN_PASSWORD || '')) {
        await env.ND_LOGS.put(rlKey, String(tries + 1), { expirationTtl: 900 });
        return new Response(loginPage(true, next), {
          status: 401,
          headers: { 'Content-Type': 'text/html; charset=utf-8', ...NOINDEX }
        });
      }

      const token = await adminToken(env);
      return new Response(null, {
        status: 302,
        headers: {
          'Location': next.startsWith('/admin') ? next : '/admin/missing-searches/',
          'Set-Cookie': `nd_admin=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=604800`,
          ...NOINDEX
        }
      });
    }

    if (url.pathname.startsWith('/admin')) {
      if (await isAdmin(request, env)) {
        // Girişli → statik admin sayfasını servis et
        const res = await env.ASSETS.fetch(request);
        const headers = new Headers(res.headers);
        headers.set('X-Robots-Tag', 'noindex, nofollow');
        return new Response(res.body, { status: res.status, headers });
      }
      return new Response(loginPage(false, url.pathname), {
        status: 401,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...NOINDEX }
      });
    }

    // ----- API -----
    if (url.pathname === '/api/log-search') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders(origin) });
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const query = typeof body.query === 'string' ? body.query.trim().toLowerCase() : '';
          if (!query) return json({ error: 'Query is required' }, 400, origin);

          const resultFound = Boolean(body.resultFound);
          const resultCount = Number(body.resultCount) || 0;
          const kvKey = `log:${query}`;

          const existing = await env.ND_LOGS.get(kvKey, 'json');
          const entry = existing || { count: 0, lastFound: null, lastMissing: null, lastSearched: null };
          entry.count += 1;
          entry.lastSearched = new Date().toISOString();
          if (resultFound) entry.lastFound = entry.lastSearched;
          else entry.lastMissing = entry.lastSearched;

          await env.ND_LOGS.put(kvKey, JSON.stringify(entry));

          return json({ success: true, entry }, 200, origin);
        } catch (err) {
          return json({ error: 'Internal Server Error' }, 500, origin);
        }
      }

      if (request.method === 'GET') {
        // Arama talebi verileri gizli → yalnızca admin
        if (!(await isAdmin(request, env))) {
          return json({ error: 'Unauthorized' }, 403, origin);
        }
        const list = await env.ND_LOGS.list({ prefix: 'log:' });
        const summaries = [];
        for (const key of list.keys) {
          const val = await env.ND_LOGS.get(key.name, 'json');
          if (val && val.lastMissing) {
            summaries.push({
              query: key.name.slice(4),
              count: val.count,
              lastSearched: val.lastSearched
            });
          }
        }
        summaries.sort((a, b) => b.count - a.count);
        return json({ summaries }, 200, origin);
      }

      return json({ error: 'Method Not Allowed' }, 405, origin);
    }

    // www -> apex redirect
    if (url.hostname === 'www.neleredikkat.com' && request.method === 'GET') {
      return Response.redirect('https://neleredikkat.com' + url.pathname + url.search, 301);
    }

    // Diğer her şey: statik assetler (env.ASSETS)
    return env.ASSETS.fetch(request);
  }
};
