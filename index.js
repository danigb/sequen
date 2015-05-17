'use strict';

var vico = require('./lib/vico.js');
vico.fn.delay = require('./lib/delay.js');

vico.duration = require('./lib/duration.js');
vico.region = require('./lib/region.js');
vico.merge = require('./lib/merge.js');

module.exports = vico;
