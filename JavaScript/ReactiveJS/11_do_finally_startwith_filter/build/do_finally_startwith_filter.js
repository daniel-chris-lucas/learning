'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// utility operators
// - do
// - finally

// ------------------------
// do
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-do
// public do(nextOrObserver:Observer|function, error:function, complete:function):Observable
//
// Perform a side effect for every emission on the source Observable, but return an
// Observable that is identical to the source.

_Rx2.default.Observable.range(1, 10).do(function (a) {
    return console.log('From do ' + a);
}).map(function (a) {
    return a * a;
}).subscribe((0, _util.createSubscriber)('do'));

_Rx2.default.Observable.range(1, 10).finally(function () {
    return console.log('From finally');
}).map(function (a) {
    return a * 2;
}).subscribe((0, _util.createSubscriber)('finally'));

// ------------------------
// filter
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter
// public filter(predicate:function(value:T, index:number):boolean, thisArg:any):Observable
//
// Filter items emitted by the source Observable by only emitting those that satisfy a
// specified predicate.

_Rx2.default.Observable.range(1, 10).filter(function (a) {
    return a < 2 || a > 6;
}).subscribe((0, _util.createSubscriber)('filter'));

// ------------------------
// startWith
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-startWith
// public startWith(an:Values):Observable
//
// Returns an Observable that emits the items in a specified Iterable before it begins
// to emit items emitted by the source Observable.

_Rx2.default.Observable.interval(1000).startWith(-1).subscribe((0, _util.createSubscriber)('interval'));