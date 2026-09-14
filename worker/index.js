// NelerDikkat — Cloudflare Worker
// Statik site (Workers Static Assets) + KV-backed /api/log-search endpoint.
// KV: ND_LOGS namespace — anahtar: "log:<query>", değer: {count, lastFound, lastMissing, lastSearched}

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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

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
        // Özet: hiç bulunamayan (lastMissing set) sorgular, count desc
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
