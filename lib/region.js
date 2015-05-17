'use strict';

var vico = require('./vico.js');

/*
 * region
 *
 * @param {Array} events - The events array
 * @param {Integer} begin - The start position of the region array in ticks
 * @param {Integer} end - The end position of the region array in ticks
 * @return {Array} a new array of events
 */
module.exports = function(events, begin, end) {
  return vico(events).filter(function(event) {
    return event.position >= begin && event.position < end;
  });
}
