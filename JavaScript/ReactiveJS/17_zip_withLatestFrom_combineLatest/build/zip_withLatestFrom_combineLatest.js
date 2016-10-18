'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*function arrayZip(array1, array2, selector) {
    const count = Math.min(array1.length, array2.length);
    const results = [];

    for (let i = 0; i < count; i++) {
        const combined = selector(array1[i], array2[i]);
        results.push(combined);
    }

    return results;
}

const array1 = [32, 2, 52, 43, 54];
const array2 = [1, 0, 10, 4, 1, 4, 1, 6, 2, 4];
const results = arrayZip(array1, array2, (left, right) => left * right);

console.log(results);*/

// ------------------------
// zip
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-zip
// public static zip(observables:*):WebSocketSubject

/*Rx.Observable.range(1, 10)
    .zip(
        Rx.Observable.interval(500),
        (left, right) => `item: ${left}, at ${right * 500}`
    )
    .subscribe(createSubscriber('zip'));*/

// ------------------------
// withLatestFrom
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-withLatestFrom
// public withLatestFrom(other:Observable, project:Function):Observable
//
// Combines the source Observable with the other Observables to create an Observable whose values
// are calculated from the latest values of each, only when the source emits.

/*Rx.Observable.interval(1000)
    .withLatestFrom(Rx.Observable.interval(500))
    .subscribe(createSubscriber('withLatestFrom'));*/

// ------------------------
// combineLatest
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineLatest
// public function combineLatest(other:Observable, project:function):Observable
//
// Combines multiple Observables to create an Observable whose values are calculated from the latest
// values of each of its input Observables.

/*Rx.Observable.interval(1000)
    .combineLatest(Rx.Observable.interval(500))
    .take(5)
    .subscribe(createSubscriber('withLatestFrom'));*/

_Rx2.default.Observable.interval(1000).combineLatest(_Rx2.default.Observable.interval(500), function (left, right) {
    return left * right;
}).take(10).subscribe((0, _util.createSubscriber)('withLatestFrom'));