'use strict';

module.exports = function(source, transform) {
  var seq = source.map(eventize);
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

function buildTransform(options) {
  return function(e, position) {
    e.duration = options.duration || e.duration;
    e.position = position;
  }
}

function eventize(obj) {
  return {
    value: obj.value || obj,
    position: obj.position || 0,
    duration: obj.duration || 0
  };
}
