'use strict';

var vico = require('./vico.js');
/*
 * delay
 */
module.exports = function(seq, opts) {
  var delay = opts.delay || 0;
  return vico(seq, function(e) {
    e.position += delay;
  });
}
