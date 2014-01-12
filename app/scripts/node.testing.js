// it's the bigger picture dude/ette
'use strict';
// Still a little over my head...
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
		firstProgrammer
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
	// object instances
	console.log(firstProgrammer);
	console.log(firstProgrammer.__proto__);
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
(function (x) {
	return function (y) {
		return function (z) {
			console.log(x*y*z);
		}
	}
})(1)(2)(3);
var poplin = (function () {
	var 
		methodOne
	;
	methodOne = function (arg) {
		return 'Module Testing...' + arg;
	}
	return { methodOne: methodOne };
}());
console.log(poplin.methodOne('JavaScript && C/C++/Objective-C/Java are the only languages worth knowing at this point...'));
(function () {
	// return from this scope context...
	var moduleTesting = (function () {
		var module, module2;
		module = function (a,b,c) {
			return a*b+c;
		}
		module2 = function (arg) {	
			return arg;
		}
		return { module:module,
				 module2:module2 };
	}());
	console.log(moduleTesting.module(10,2,3));
	console.log(moduleTesting.module2('I\'m getting old...'));
}());
// global...
var core = (function () {
	var core1;
	core1 = function (stringOfText) {
		return 'It\'s ' + stringOfText;
	}
	return {core1:core1};
}());
core.second = (function () {
	var core2;
	core2 = function (arg1) {
		return arg1;
	}
	return {core2:core2};
}());
console.log(core.core1('Ryan...'));
console.log(core.second.core2('What are you good for?'));
console.log(core);
(function () {
	var roominate = (function () {
		var smallRoom, ouyaSpace;
		smallRoom = function () {
			return 'Just messing around in here...';
		}
		ouyaSpace = function () {
			return 'Just messing around here...';
		}
		return {smallRoom:smallRoom,ouyaSpace:ouyaSpace};
	}());
	console.log(roominate.smallRoom());
	console.log(roominate.ouyaSpace());
}());
// global context...
// JS Engine...
// Declare && Init function arguments...
(function (a) {
	// 1st local context...
	// Declare local function vars...
	// No init taking place, yet...	
	// Declare and Init the functions and vars...
	var test1 = a;
	console.log(a);
	return function (b) {
		// 2nd local context...
		var test2 = b;
		console.log(b);
		return function (c) {
			// 3rd local context...
			var test3 = c;
			console.log(c);
			return function (d) {
				// 4th local context...
				var test4 = d;
				console.log(d);
				return function (e) {
					// 5th local context...
					var test5 = e;
					console.log(e);
					console.log(a,b,c,d,e);
				}
			}
		}
	}
}(1)(2)(3)(4)(5));
// A common tricky part...
var globalMess = 'A noob trip up...';
function messedUp (arg) {
	var globalMess;
	globalMess = 'Another noob trip up...';
	console.log(arg);
	console.log(globalMess);
}
messedUp(globalMess);
// If other languages have to be learned such as Objective-C, Java, Ruby, Python, C/C++, etc... Understand the inner workings of the interpreters and compilers...b/c outside of logic, and math there's no much more to it than that besides the execution and options within the programming/design environment...
// executionContextObject function is hoisted to the top of the file among other hoisted functions...
// Here's an execution context object...
executionContextObject('Understand that execution context object...');
// Understand the execution context object and you'll be a JS King...
function executionContextObject (arg) {
	console.log(arg);
	// return arg;
}
console.log('Nodemon Test Run...');
var tester;
tester = 'I\'m global scoped...';
console.log(tester);
function outer () {
	var tester;
	tester = 'I\'m outer scoped...';
	console.log(tester);
	function inner () {
		var tester;
		tester = 'I\'m inner scoped...';
		console.log(tester);
	}
	inner();
}
outer();
console.log('asdfjkl;');
// this is prototyping in a nutshell?..
var programmer;
console.log(programmer);
programmer = {
	name: 'Ryan Poplin',
	age: 23,
	languages: ['HTML5', 'CSS3', 'JavaScript']
};
console.log(programmer);
// Prototyping for Roominate...
/*var roominate;		
roominate = (function () {

}());*/
// A prototype...
(function () {
	var coreModule;
	coreModule = (function () {
		var protoProgrammer, makaProgrammer, poplinProgrammer;
		protoProgrammer = {
			name: 'John Doe',
			age: 23,
			languages: ['HTML5', 'CSS3', 'JavaScript']
		};
		makaProgrammer = function (name, age, langs) {
			var programmer;
			// Prototype Linkage...
			programmer = Object.create(protoProgrammer);
			// Constructor with a prototypal mind set...
			programmer.name = name;
			programmer.age = age;
			programmer.langs = langs;
			return programmer;
		};
		// The instance of makaProgrammer...
		poplinProgrammer = makaProgrammer('Ryan Poplin', 23, ['JavaScript']);
		console.log(poplinProgrammer);
		console.log(poplinProgrammer.__proto__);
	}());
}());