vows = require('vows');
assert = require('assert');
_ = require('lodash');

vico = require('../');

vows.describe('Vico region').addBatch({
  "create region": function() {
    seq = vico('a b c d'.split(' '), { duration: 10 });
    region = vico.region(seq, 10, 30);
    assert.equal(region.length, 2);
    assert.deepEqual(_.pluck(region, 'value'), ['b', 'c']);
  },
  "region doesn't modify source": function() {
    seq = vico('a b c d'.split(' '), { duration: 10 });
    region = vico.region(seq, 10, 30);
    assert.equal(seq.length, 4);
  }
}).export(module);
