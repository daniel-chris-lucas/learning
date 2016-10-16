'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// interval
//
// public static interval(period:number, scheduler:Scheduler):Observable
// 
// Creates an Observable that emits sequential numbers every specified interval of time,
// on a specified Scheduler.

_Rx2.default.Observable.interval(500).take(5).subscribe((0, _util.createSubscriber)('one'));

// ------------------------
// timer
//
// public static timer(initialDelay:number|Date, period:number, scheduler:Scheduler):Observable
//
// Creates an Observable that starts emitting after an initialDelay and emits ever increasing
// numbers after each period of time thereafter.

_Rx2.default.Observable.timer(1000, 500).take(3).subscribe((0, _util.createSubscriber)('timer'));

// ------------------------
// of
//
// public static of(values:...T, scheduler:Scheduler):Observable<T>
//
// Creates an Observable that emits some values you specify as arguments, immediately one after
// the other, and then emits a complete notification.

_Rx2.default.Observable.of("HELLO, WORLD", 42, "whoa").subscribe((0, _util.createSubscriber)('of'));

// ------------------------
// from
//
// public static from(ish:ObservableInput<T>, mapFn:function(x:any, i:number):T, thisArg:any, scheduler:Scheduler):Observable<T>
//
// Creates an Observable from an Array, an array-like object, a Promise, an iterable object
// or an Observable-like object.

_Rx2.default.Observable.from([23, 10, 4]).subscribe((0, _util.createSubscriber)('from'));

_Rx2.default.Observable.from([1, 2, 3, 4, 5]).map(function (i) {
    return i * 5;
}).subscribe((0, _util.createSubscriber)('from'));

// ------------------------
// throw
//
// public static throw(error:any, scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits an error
// notification.

_Rx2.default.Observable.throw(new Error('HEY')).subscribe((0, _util.createSubscriber)('error'));

// ------------------------
// empty
//
// public static empty(scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits a
// complete notification.

_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)('empty'));

// ------------------------
// defer
//
// public static defer(observableFactory:function():Observable|Promise):Observable
//
// Creates an Observable that, on subscribe, calls an Observable factory to make an
// Observable for each new Observer.

var sideEffect = 0;
var defer$ = _Rx2.default.Observable.defer(function () {
    sideEffect++;
    return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)('defer$.one'));
defer$.subscribe((0, _util.createSubscriber)('defer$.two'));
defer$.subscribe((0, _util.createSubscriber)('defer$.three'));

// ------------------------
// never
//
// public static never():Observable
//
// Creates an Observable that emits no items to the Observer.

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)('never'));

// ------------------------
// range
//
// public static range(start:number, count:number, scheduler:Scheduler):Observable
//
// Creates an Observable that emits a sequence of numbers within a specified range.

_Rx2.default.Observable.range(10, 30).subscribe((0, _util.createSubscriber)('range'));