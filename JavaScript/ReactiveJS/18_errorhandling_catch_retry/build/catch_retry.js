'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// throw
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-throw
// public static throw(error:any, scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits an error
// notification.

/*Rx.Observable.concat(
    Rx.Observable.of(42),
    Rx.Observable.throw(new Error('BLEGH')),
    Rx.Observable.of(10)
)
    .subscribe(createSubscriber('catch'));*/

// ------------------------
// catch
//
// public catch(err:any, caught:Observable<T>):Observable<R>
// 
// Catches errors on the Observable to be handled by returning a new Observable or throwing an error.

// Rx.Observable.fromPromise(getApi())
getApi().retry(3).catch(function (error) {
    return _Rx2.default.Observable.of(error);
}).do(function () {
    return console.log('THING');
}).subscribe((0, _util.createSubscriber)('api'));

// function getApi() {
//     console.log('Getting API');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Hello');
//             reject(new Error());
//         }, 1000);
//     });
// }

function getApi() {
    return new _Rx2.default.Observable(function (observer) {
        console.log('Getting API');
        setTimeout(function () {
            // observer.next('HEY');
            // observer.complete();
            observer.error(new Error());
        }, 1000);
    });
}