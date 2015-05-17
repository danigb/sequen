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
  "clone": function() {
    s = vico("a b c".split(' '));
    d = vico.clone(s);
    assert.deepEqual(d, s);
    assert(d !== s);
  },
  "sort": function() {
    s = vico('a b c'.split(' '), { duration: 10 });
    s[0].position += 300;
    sorted = vico.sort(s);
    assert.deepEqual(_.pluck(s, 'value'), ['b', 'c', 'a']);
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
  "unknown option throws exception": function() {
    assert.throws(function () {
      vico("a".split(' '), { noplugin: 3 });
    }, Error);
  },
  "add transformation": function() {
    vico.fn.upper = function() {
      return function(e, position) {
        e.value = e.value.toUpperCase();
      }
    }
    s = vico("a b c".split(' '), { upper: true });
    assert.deepEqual(_.pluck(s, 'value'), ['A', 'B', 'C']);
  },
  "duration option": function() {
    s = vico("a b c".split(' '), { duration: 10 });
    assert.deepEqual(_.pluck(s, 'value'), ['a', 'b', 'c']);
    assert.deepEqual(_.pluck(s, 'duration'), [10, 10, 10]);
    assert.deepEqual(_.pluck(s, 'position'), [0, 10, 20]);
  }
}).export(module);
