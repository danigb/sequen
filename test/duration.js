vows = require('vows');
assert = require('assert');
_ = require('lodash');

vico = require('../');

vows.describe('Vico duration').addBatch({
  "calculate duration": function() {
    seq = vico('a b c'.split(' '), { duration: 10 });
    assert.equal(vico.duration(seq), 30);
  }
}).export(module);
