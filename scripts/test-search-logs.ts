import assert from 'node:assert/strict';
import { updateSearchStats, summarizeMissingSearch } from '../worker/index.js';

const firstMissing = updateSearchStats(null, false, '2026-09-28T10:00:00.000Z');
assert.deepEqual(firstMissing, {
  totalCount: 1,
  missingCount: 1,
  foundCount: 0,
  lastFound: null,
  lastMissing: '2026-09-28T10:00:00.000Z',
  lastSearched: '2026-09-28T10:00:00.000Z'
});

const thenFound = updateSearchStats(firstMissing, true, '2026-09-28T11:00:00.000Z');
assert.equal(thenFound.totalCount, 2);
assert.equal(thenFound.missingCount, 1);
assert.equal(thenFound.foundCount, 1);
assert.equal(summarizeMissingSearch('log:test', thenFound)?.count, 1);

const legacy = updateSearchStats({ count: 7, lastFound: null, lastMissing: '2026-09-27T10:00:00.000Z', lastSearched: '2026-09-27T10:00:00.000Z' }, false, '2026-09-28T12:00:00.000Z');
assert.equal(legacy.totalCount, 8);
assert.equal(legacy.missingCount, 8);
assert.equal(summarizeMissingSearch('log:legacy', legacy)?.count, 8);
assert.equal(summarizeMissingSearch('log:found-only', updateSearchStats(null, true, '2026-09-28T12:00:00.000Z')), null);

console.log('search log tests passed');
