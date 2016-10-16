'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*fs.readdir('./src-server', (err, items) => {
    if (err) console.error(err);
    else {
        console.log(items);
    }
});*/

// ------------------------
// bindNodeCallback
//
// public static bindNodeCallback(func:function, selector:function, scheduler:Scheduler):function(...params*):Observable
//
// Converts a Node.js-style callback API to a function that returns an Observable

/*const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);*/

// ------------------------
// mergeMap
//
// public mergeMap
//
// Projects each source value to an Observable which is merged in the output Observable.

/*readdir$('./src-server')
    .mergeMap(files => Rx.Observable.from(files))
    .map(file => `MANIPULATED ${file}`)
    .subscribe(createSubscriber('readdir'));*/

function getItem() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('HELLO');
        }, 1000);
    });
}

// ------------------------
// fromPromise
//
// public static fromPromise(promise:Promise<T>, scheduler:Scheduler):Observable<T>
//
// Converts a Pormise to an Observable

_Rx2.default.Observable.fromPromise(getItem()).subscribe((0, _util.createSubscriber)('promise'));