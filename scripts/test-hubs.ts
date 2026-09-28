import assert from 'node:assert/strict';
import { DECISION_HUBS, getHubsForGuide } from '../src/data/hubs';

assert.equal(DECISION_HUBS.length, 4);
for (const hub of DECISION_HUBS) {
  assert.ok(hub.categorySlug, `${hub.slug}: categorySlug eksik`);
  assert.ok(hub.ogImage.startsWith('/og/'), `${hub.slug}: ogImage eksik`);
}
assert.equal(new Set(DECISION_HUBS.map(hub => hub.ogImage)).size, DECISION_HUBS.length);

const expectedMemberships = DECISION_HUBS.reduce(
  (count, hub) => count + new Set(hub.stages.flatMap(stage => stage.guideIds)).size,
  0
);
const reverseMemberships = new Set(
  DECISION_HUBS.flatMap(hub =>
    hub.stages.flatMap(stage => stage.guideIds.map(guideId => `${hub.slug}:${guideId}`))
  )
);
assert.equal(reverseMemberships.size, expectedMemberships);
for (const membership of reverseMemberships) {
  const [hubSlug, guideId] = membership.split(':');
  assert.ok(getHubsForGuide(guideId).some(hub => hub.slug === hubSlug), `${guideId} -> ${hubSlug} geri bağlantısı eksik`);
}

assert.equal(getHubsForGuide('ev-kiralarken')[0]?.slug, 'ev-kiralama');
assert.equal(getHubsForGuide('klima-alirken').some(hub => hub.slug === 'klima'), true);
assert.equal(getHubsForGuide('mikrofon-alirken').some(hub => hub.slug === 'podcast-kurulumu'), true);

console.log('hub relationship tests passed');
