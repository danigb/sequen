'use strict';

var vico = function(source, transform) {
  var seq = vico.clone(source);
  var position = 0;
  if(transform) {
    if(typeof(transform) !== 'function') {
      transform = buildTransform(transform);
    }
    seq.forEach(function(e) {
      transform(e, position);
      position += e.duration;
    });
  }
  return seq;
}

vico.clone = function(array) {
  return array.map(function(obj) {
    return {
      value: obj.value || obj,
      position: obj.position || 0,
      duration: obj.duration || 0
    };
  });
}

vico.sort = function(array) {
  return array.sort(function(a, b) {
    return a.position - b.position;
  });
}

vico.fn = {};
vico.fn.duration = function(duration) {
  return function(e, position) {
    e.duration = duration || e.duration;
    e.position = position;
  }
}

function buildTransform(options) {
  var chain = Object.keys(options).map(function(name) {
    if(typeof(vico.fn[name]) !== 'function') {
      throw Error('Transformation ' + name + ' not valid. ');
    }
    return vico.fn[name].call(null, options[name]);
  });
  return function(e, position) {
    for(var i = 0, total = chain.length; i < total; i++) {
      chain[i].call(null, e, position);
    }
  }
}

module.exports = vico;
