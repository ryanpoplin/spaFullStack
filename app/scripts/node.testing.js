'use strict';
(function () {
	var 
		EventEmitter, 
		Counter,
		counter,
		callback
	;
	EventEmitter = require('events').EventEmitter;
	Counter = function (init) {
		this.increment = function () {
			init++;
			this.emit('incremented', init);
		}
	}
	Counter.prototype = new EventEmitter();
	counter = new Counter(23);
	callback = function (count) {
		console.log(count);
	}
	// or 'counter.on'
	counter.addListener('incremented', callback);
	counter.increment();
	counter.increment();
	counter.increment();
	counter.removeListener('incremented', callback);
}());