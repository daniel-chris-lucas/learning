import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';
import fs from 'fs';

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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
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

Rx.Observable.fromPromise(getItem())
    .subscribe(createSubscriber('promise'));