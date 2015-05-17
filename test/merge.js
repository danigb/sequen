vows = require('vows');
assert = require('assert');
_ = require('lodash');

vico = require('../');

vows.describe('Vico delay').addBatch({
  "delay": function() {
    s1 = vico('a b c'.split(' '), { duration: 10 });
    s2 = vico('A B C'.split(' '), { duration: 10, delay: 5 })
    seq = vico.merge(s1, s2);
    assert.deepEqual(_.pluck(seq, 'value'), ['a', 'A', 'b', 'B', 'c', 'C']);
  }
}).export(module);
