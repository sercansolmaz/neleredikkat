const fs = require('fs');
const t = fs.readFileSync('src/data/guides.ts', 'utf8');
const markers = t.split(/\n  \/\/ \d+\./).slice(1);
const allIds = Array.from(t.matchAll(/id: '([a-z0-9-]+)',\n\s+slug:/g)).map(m => m[1]);
const problems = [];

if (allIds.length !== new Set(allIds).size) problems.push('duplicate guide ids');

markers.forEach((blk) => {
  const gid = (blk.match(/slug: '([a-z0-9-]+)'/) || [])[1];
  const critIds = Array.from(blk.matchAll(/\{ id: '([a-z0-9-]+)', title:/g)).map(m => m[1]);
  Array.from(blk.matchAll(/recommendedCriteriaIds: \[([^\]]+)\]/g)).forEach((m) => {
    m[1].split(',').map(s => s.trim().replace(/'/g, '')).forEach(r => {
      if (r && !critIds.includes(r)) problems.push(gid + ' bad scenario ref: ' + r);
    });
  });
  const rel = (blk.match(/relatedGuideIds: \[([^\]]+)\]/) || [])[1] || '';
  rel.split(',').map(s => s.trim().replace(/'/g, '')).filter(Boolean).forEach(r => {
    if (!allIds.includes(r)) problems.push(gid + ' bad related: ' + r);
  });
});

// yeni rehberlerde numaralı title olmamalı (21-37 arası bloklar)
const newBlockStart = t.indexOf('// 21.');
const newPart = t.slice(newBlockStart);
const numbered = Array.from(newPart.matchAll(/title: '\d+\./g)).length;
console.log('numbered titles in new guides:', numbered);
console.log('total guides:', markers.length);
console.log('problems:', problems.length ? problems : 'NONE');
