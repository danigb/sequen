vows = require('vows');
assert = require('assert');
_ = require('lodash');

vico = require('../');

vows.describe('Vico delay').addBatch({
  "delay": function() {
    seq = vico('a b c'.split(' '), { duration: 10, delay: 5 });
    assert.deepEqual(_.pluck(seq, 'position'), [5, 15, 25]);
  }
}).export(module);
