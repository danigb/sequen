/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vico = __webpack_require__(1);
	vico.duration = __webpack_require__(2);
	vico.region = __webpack_require__(3);
	vico.delay = __webpack_require__(4);

	module.exports = vico;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * duration
	 */
	module.exports = function(seq) {
	  var last = seq[seq.length - 1];
	  return last.position + last.duration;
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vico = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var vico = __webpack_require__(1);
	/*
	 * delay
	 */
	module.exports = function(seq, opts) {
	  var delay = opts.delay || 0;
	  return vico(seq, function(e) {
	    e.position += delay;
	  });
	}


/***/ }
/******/ ]);