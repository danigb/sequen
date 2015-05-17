'use strict';

var vico = require('./vico.js');
/*
 * merge
 */
module.exports = function() {
  var merged = [];
  for(var i = 0, total = arguments.length; i < total; i++) {
    merged = merged.concat(arguments[i]);
  }
  return merged.sort(function(a, b) {
    return a.position - b.position;
  });
}
