// needChains.ts + journeys.ts referans bütünlüğü — kırık zincirleri yakalar.
const fs = require('fs');

const guidesText =
  fs.readFileSync('src/data/guides.ts', 'utf8') +
  fs.readFileSync('src/data/new-guides.ts', 'utf8');
// id:/slug: anahtarları TS stilinde tırnaksız, JSON stilinde tırnaklı olabilir.
const ids = new Set(
  [...guidesText.matchAll(/["']?(?:id|slug)["']?:\s*["']([a-z0-9-]+)["']/g)].map(m => m[1])
);

const nc = fs.readFileSync('src/data/needChains.ts', 'utf8');
const refs = new Set();
for (const m of nc.matchAll(/: \[([^\]]+)\]/g)) {
  m[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean).forEach(r => refs.add(r));
}
const broken = [...refs].filter(r => !ids.has(r));

const j = fs.readFileSync('src/data/journeys.ts', 'utf8');
const jrefs = [...j.matchAll(/guideId:\s*['"]([a-z0-9-]+)['"]/g)].map(m => m[1]);
const jBroken = jrefs.filter(r => !ids.has(r));

console.log('guide id+slug havuzu:', ids.size);
console.log('needChain referansı:', refs.size, '| kırık:', broken.length);
if (broken.length) console.log('  KIRIK:', broken.join(', '));
console.log('journey referansı:', jrefs.length, '| kırık:', jBroken.length);
if (jBroken.length) console.log('  KIRIK:', jBroken.join(', '));
process.exit(broken.length || jBroken.length ? 1 : 0);
