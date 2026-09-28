import assert from 'node:assert/strict';
import { GUIDES } from '../src/data/guides';
import { CATEGORIES } from '../src/data/categories';
import { DECISION_HUBS } from '../src/data/hubs';
import { DECISION_JOURNEYS } from '../src/data/journeys';

const unique = (values: string[], label: string) => {
  assert.equal(new Set(values).size, values.length, `${label}: yinelenen değer var`);
};

const published = GUIDES.filter(guide => guide.status === 'published');
const guideIds = new Set(GUIDES.map(guide => guide.id));
const categorySlugs = new Set(CATEGORIES.map(category => category.slug));

unique(GUIDES.map(guide => guide.id), 'guide id');
unique(GUIDES.map(guide => `${guide.categorySlug}/${guide.slug}`), 'guide route');
unique(CATEGORIES.map(category => category.slug), 'category slug');
unique(DECISION_HUBS.map(hub => hub.slug), 'hub slug');
unique(DECISION_JOURNEYS.map(journey => journey.slug), 'journey slug');

assert.ok(published.length > 0, 'Yayınlanmış rehber yok');
assert.ok(CATEGORIES.every(category => published.some(guide => guide.categorySlug === category.slug)), 'Boş kategori yayın yüzeyinde bulunuyor');

for (const guide of GUIDES) {
  assert.ok(categorySlugs.has(guide.categorySlug), `${guide.id}: bilinmeyen kategori ${guide.categorySlug}`);
  assert.ok(guide.importanceItems.length > 0, `${guide.id}: kriter yok`);
  assert.ok(guide.checklistItems.length > 0, `${guide.id}: checklist yok`);
  for (const relatedId of guide.relatedGuideIds) assert.ok(guideIds.has(relatedId), `${guide.id}: kırık related ${relatedId}`);
}

for (const journey of DECISION_JOURNEYS) {
  unique(journey.steps.map(step => String(step.order)), `${journey.slug} adım sırası`);
  for (const step of journey.steps) assert.ok(guideIds.has(step.guideId), `${journey.slug}: kırık guide ${step.guideId}`);
}

for (const hub of DECISION_HUBS) {
  assert.ok(categorySlugs.has(hub.categorySlug), `${hub.slug}: bilinmeyen kategori ${hub.categorySlug}`);
  assert.ok(hub.ogImage.startsWith('/og/konu/'), `${hub.slug}: geçersiz OG yolu`);
  for (const stage of hub.stages) {
    for (const guideId of stage.guideIds) assert.ok(guideIds.has(guideId), `${hub.slug}: kırık guide ${guideId}`);
  }
}

console.log(JSON.stringify({
  guides: GUIDES.length,
  published: published.length,
  categories: CATEGORIES.length,
  hubs: DECISION_HUBS.length,
  journeys: DECISION_JOURNEYS.length
}));
