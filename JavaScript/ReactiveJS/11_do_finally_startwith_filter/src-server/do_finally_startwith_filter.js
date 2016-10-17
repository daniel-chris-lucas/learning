import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

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

Rx.Observable.range(1, 10)
    .do(a => console.log(`From do ${a}`))
    .map(a => a * a)
    .subscribe(createSubscriber('do'));

Rx.Observable.range(1, 10)
    .finally(() => console.log(`From finally`))
    .map(a => a * 2)
    .subscribe(createSubscriber('finally'));

// ------------------------
// filter
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-filter
// public filter(predicate:function(value:T, index:number):boolean, thisArg:any):Observable
//
// Filter items emitted by the source Observable by only emitting those that satisfy a
// specified predicate.

Rx.Observable.range(1, 10)
    .filter(a => a < 2 || a > 6)
    .subscribe(createSubscriber('filter'));

// ------------------------
// startWith
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-startWith
// public startWith(an:Values):Observable
//
// Returns an Observable that emits the items in a specified Iterable before it begins
// to emit items emitted by the source Observable.

Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber('interval'));