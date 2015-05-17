'use strict';

var vico = require('./vico.js');
/*
 * delay
 */
module.exports = function(delay) {
  delay = +delay || 0;
  return function(e, position) {
    e.position += delay;
  }
}
