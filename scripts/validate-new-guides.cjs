const fs = require('fs');
const ts = fs.readFileSync('src/data/new-guides.ts', 'utf8');
const markers = ts.split(/\n  \/\/ \d+\./).slice(1);
const existing = ['laptop-alirken','televizyon-alirken','ikinci-el-iphone-alirken','guvenlik-kamerasi-alirken','powerbank-alirken','ikinci-el-araba-alirken','motosiklet-alirken','ikinci-el-motosiklet-alirken','motosiklet-kaski-alirken','klima-alirken','robot-supurge-alirken','calisma-koltugu-alirken','ev-kiralarken','bebek-arabasi-alirken','oto-koltugu-alirken','bebek-bezi-alirken','kaykay-alirken','kamp-cadiri-alirken','mikrofon-alirken','ses-karti-alirken'];
const newIds = ['monitor-alirken','oyuncu-monitoru-alirken','e-kitap-okuyucu-alirken','akilli-saat-alirken','wifi-router-alirken','mesh-wifi-alirken','yazici-alirken','harici-ssd-alirken','usb-c-hub-alirken','kulaklik-alirken','kablosuz-mikrofon-alirken','podcast-mikseri-alirken','midi-klavye-alirken','kamera-alirken','tripod-alirken','video-isigi-alirken','teleprompter-alirken'];
const pool = existing.concat(newIds);
const problems = [];

markers.forEach((blk) => {
  const gid = (blk.match(/slug: '([a-z0-9-]+)'/) || [])[1];
  const critIds = Array.from(blk.matchAll(/\{ id: '([a-z0-9-]+)', title:/g)).map(m => m[1]);
  Array.from(blk.matchAll(/recommendedCriteriaIds: \[([^\]]+)\]/g)).forEach((m) => {
    m[1].split(',').map(s => s.trim().replace(/'/g, '')).forEach(r => {
      if (!critIds.includes(r)) problems.push(gid + ' bad scenario ref ' + r);
    });
  });
  const rel = (blk.match(/relatedGuideIds: \[([^\]]+)\]/) || [])[1] || '';
  rel.split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean).forEach(r => {
    if (!pool.includes(r)) problems.push(gid + ' bad related ' + r);
    if (r === gid) problems.push(gid + ' self-ref');
  });
  const rfCount = (blk.match(/\{ id: 'rf\d+'/g) || []).length;
  const qCount = (blk.match(/target: 'seller'/g) || []).length;
  const ckIds = Array.from(blk.matchAll(/\{ id: 'c\d+', text:/g)).length;
  if (rfCount < 2 || rfCount > 4) problems.push(gid + ' redFlags=' + rfCount);
  if (qCount < 3 || qCount > 4) problems.push(gid + ' questions=' + qCount);
  if (ckIds < 4 || ckIds > 8) problems.push(gid + ' checklist=' + ckIds);
});

// numaralı title kontrolü (spec: numara YAZMA)
const numberedTitles = Array.from(ts.matchAll(/title: '\d+\./g)).length;
console.log('numbered titles:', numberedTitles);
console.log('problems:', problems.length ? problems : 'NONE');
console.log('total guides:', markers.length);
console.log('total lines:', ts.split('\n').length);
