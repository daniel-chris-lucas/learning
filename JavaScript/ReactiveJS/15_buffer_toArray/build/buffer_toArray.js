'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// bufferCount
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferCount
// public bufferCount(bufferSize:number,startBufferEvery:number):Observable<T[]>
//
// Buffers the source Observable values until the size hits the maximum bufferSize given

/*Rx.Observable.range(1, 100)
    .bufferCount(50)
    .subscribe(createSubscriber('bufferCount'));*/

// ------------------------
// bufferTime
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferTime
// public bufferTime(bufferTimeSpan:number, bufferCreationInterval:number, maxBufferSize:number, scheduler:Scheduler):Observable<T[]>
//
// Buffers the source Observable values for a specific time period.

/*Rx.Observable.interval(500)
    .bufferTime(2000)
    .subscribe(createSubscriber('bufferTime'));*/

// ------------------------
// buffer
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-buffer
// public buffer(closingNotifier:Observable<any>):Observable<T[]>
//
// Buffers the source Observable values until closingNotifier emits.

/*Rx.Observable.interval(500)
    .buffer(Rx.Observable.interval(2000))
    .subscribe(createSubscriber('buffer'));*/

// ------------------------
// toArray
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-toArray
// public toArray():Observable<any[]>|WebSocketSubject<T>|Observable<T>

_Rx2.default.Observable.range(1, 10).toArray().subscribe((0, _util.createSubscriber)('toArray'));