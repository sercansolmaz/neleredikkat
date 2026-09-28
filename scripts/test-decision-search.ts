import assert from 'node:assert/strict';
import { searchDecisionContent } from '../src/lib/search';

function first(query: string) {
  return searchDecisionContent(query)[0];
}

assert.equal(first('podcast kurulumu')?.href, '/konu/podcast-kurulumu/');
assert.equal(first('btu hesaplama')?.href, '/araclar/klima-btu-hesaplama/');
assert.equal(first('kira maliyeti')?.href, '/araclar/ev-kira-maliyeti/');
assert.equal(first('gunes gozlugu')?.href, '/giyim-aksesuar/gunes-gozlugu-alirken/');
assert.equal(first('iş eğitimi'), undefined);
assert.equal(first('akvaryum filtresi'), undefined);
assert.equal(first('oyuncu koltuğu')?.href, '/ev-yasam/calisma-koltugu-alirken/');

const laptop = searchDecisionContent('laptop alırken');
assert.equal(laptop[0]?.href, '/teknoloji/laptop-alirken/');
assert.ok(laptop.length <= 12, `Beklenen en fazla 12 sonuç, gelen: ${laptop.length}`);

const types = new Set(searchDecisionContent('podcast').map(result => result.type));
assert.ok(types.has('hub'), 'Podcast aramasında karar merkezi bulunmalı');
assert.ok(types.has('tool'), 'Podcast aramasında araç bulunmalı');
assert.ok(types.has('journey'), 'Podcast aramasında yolculuk bulunmalı');
assert.ok(types.has('guide'), 'Podcast aramasında rehber bulunmalı');

console.log('decision search tests passed');
