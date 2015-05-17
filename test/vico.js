vows = require('vows');
assert = require('assert');
_ = require('lodash');

vico = require('../');

vows.describe('Vico').addBatch({
  "simplest sequence": function() {
    s = vico("a b c".split(' '));
    assert.equal(s.length, 3);
    assert.deepEqual(_.pluck(s, 'value'), ['a', 'b', 'c']);
    assert.deepEqual(_.pluck(s, 'position'), [0, 0, 0]);
    assert.deepEqual(_.pluck(s, 'duration'), [0, 0, 0]);
  },
  "transform function": function() {
    s = vico("a b c".split(' '), function(e, position) {
      e.value = e.value.toUpperCase();
      e.duration = 10;
      e.position = position;
    });
    assert.deepEqual(_.pluck(s, 'value'), ['A', 'B', 'C']);
    assert.deepEqual(_.pluck(s, 'duration'), [10, 10, 10]);
    assert.deepEqual(_.pluck(s, 'position'), [0, 10, 20]);
  },
  "duration option": function() {
    s = vico("a b c".split(' '), { duration: 10 });
    assert.deepEqual(_.pluck(s, 'value'), ['a', 'b', 'c']);
    assert.deepEqual(_.pluck(s, 'duration'), [10, 10, 10]);
    assert.deepEqual(_.pluck(s, 'position'), [0, 10, 20]);
  }
}).export(module);
