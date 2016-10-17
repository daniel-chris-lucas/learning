import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// ------------------------
// merge
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-merge
// public merge(other:Observable, concurrent:number, scheduler:Scheduler):Observable
//
// Creates ann output Observable which concurrently emits all values from every given
// input Observable

/*Rx.Observable.interval(1000)
    .merge(Rx.Observable.interval(500))
    .subscribe(createSubscriber('merge1'));*/

// ------------------------
// static merge
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-merge
// public static merge(input1:Observable, input2:Observable, concurrent:number, scheduler:Scheduler):Observable
//
// Creates an output Observable which concurrently emits all values from every given input
// Observable.

/*Rx.Observable.merge(
    Rx.Observable.interval(1000).map(i => `${i} seconds`),
    Rx.Observable.interval(500).map(i => `${i} half seconds`)
)
    .take(10)
    .subscribe(createSubscriber('merge2'));*/

// ------------------------
// concat
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-concat
// public concat(other:Observable, scheduler:Scheduler):Observable
//
// Creates an output Observable which sequentially emits all values from every given input
// Observable after the current Observable.
Rx.Observable.interval(500)
    .take(3)
    .concat(Rx.Observable.range(10, 3))
    .subscribe(createSubscriber('concat1'));