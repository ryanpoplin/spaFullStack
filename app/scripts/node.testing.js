// it's the bigger picture dude/ette
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
	// engine testing
	var
		testOne
	;
	testOne = 'Just testing here...';
	function testFuncOne (testOne) {
		// var hoisting occured, but was not init over first pass init
		console.log(testOne);
		var testOne = 'Now it\'s locally init';
		console.log(testOne);
	}
	testFuncOne(testOne);
	// 'super important' === 'execution context and the execution context object'
	// === empty context obj
	outerCon(23);
	// arg === declared && init
	// global execution context
	function outerCon (arg) {
		// local var declared && === undefined
		// init while executing
		// scope contexts
		var 
			localVar
		;
		localVar = 'it\'s just a local thing, you wouldn\'t understand';
		function innerCon () {
			console.log('innerCon');
		}
		// no execution on first passing
		// a new context object 
		innerCon();
	}
	// prototype-based testing
	// 1st
	var
		objectCreate,
		proto,
		MakeProgrammer,
		firstProgrammer,
		secondProgrammer
	;
	// cross-browser Object.create && what it is doing
	objectCreate = function (arg) {
		if (!arg) { return {}; }
		function obj () {};
		obj.prototype = arg;
		return new obj;
	};
	Object.create = Object.create || objectCreate;
	// prototype framework
	// just like defaults
	proto = {
		name: 'Neck Beard',
		age: 33,
		languages: ['HTML5', 'CSS3', 'JavaScript']
	};
	// constructor function/object
	MakeProgrammer = function (name, age) {
		var
			programmer
		;
		programmer = Object.create(proto);
		programmer.name = name;
		programmer.age = age;
		return programmer;
	};
	// instantiate
	firstProgrammer = MakeProgrammer('Ryan Poplin', 23);
	secondProgrammer = MakeProgrammer('Electric Dodds', 27);
	// object instances
	console.log(firstProgrammer);
	console.log(firstProgrammer.__proto__);
	console.log(secondProgrammer);
	console.log(secondProgrammer.__proto__.__proto__);
}());
// a module pattern
var 
	// tis global
	poplinr
;
poplinr = (function () {
	var
		localProgrammer
	;
	localProgrammer = 'Ryan Poplin is a JavaScript programmer';
	return { localProgrammer: localProgrammer };
}());
console.log(poplinr.localProgrammer);
// a basic closure
var
	// tis global
	makeClosure

;
makeClosure = function (closure) {
	return function () {
		return closure;
	}
};
var
	poplinClosure
;
poplinClosure = makeClosure('Ryan Poplin');
console.log(poplinClosure());
// closure country
var 
	curryLog,
	logHello,
	logStayAliveBabe,
	logTimeToSayGoodbyeHun
;
curryLog = function (arg) {
	var
		log
	;
	log = function () {
		console.log(arg);
	};
	return log;
};
logHello = curryLog('Hey, I\'m only human');
logStayAliveBabe = curryLog('I\'d give you the world if you\'d love me');
logTimeToSayGoodbyeHun = curryLog('It\'s time for me to go now, goodbye');
logHello();
logStayAliveBabe();
logTimeToSayGoodbyeHun();
// won't work
curryLog('Ryan was here...');
// ...
var 
	outerFunc,
	beer
;
beer = 'Heineken';
outerFunc = function () {
	var 
  		wine, 
  		innerFunc
	;
	wine = 'Merlot';
	innerFunc = function () {
		// console.log(beer, wine);
    	console.log({ beer: beer, wine: wine });
	};
	return innerFunc();
};
outerFunc();