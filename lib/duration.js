'use strict';

/*
 * duration
 */
module.exports = function(seq) {
  var last = seq[seq.length - 1];
  return last.position + last.duration;
}
