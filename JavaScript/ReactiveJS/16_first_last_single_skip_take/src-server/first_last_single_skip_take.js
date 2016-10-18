import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

const simple$ = new Rx.Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.complete();
});

// ------------------------
// first
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-first
// public first(predicate:function(value:T, index:number, source:Observable<T>):boolean, resultSelector:function(value:T, index:number):R, defaultValue:R):Observable<T|R>
//
// Emits only the index of the first value emitted by the source Observable that meets some condition

/*simple$.first()
    .subscribe(createSubscriber('first'));*/



// ------------------------
// last
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-last
// public last(predicate:function):Observable
//
// Returns an Observable that emits only the last item emitted by the source Observable

/*simple$.last()
    .subscribe(createSubscriber('last'));*/



// ------------------------
// single
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-single
// public single(a:Function):Observable<T>
//
// Returns an Observable that emits the single item emitted by the source Observable that matches
// a specified predicate, if that Observable emits one such item

/*simple$.single((val) => val === 3)
    .subscribe(createSubscriber('single'));*/



// ------------------------
// take | takeLast
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-take
// public take(count:number):Observable<T>
//
// Emits only the first count values emitted by the source Observable

/*simple$.take(2)
    .subscribe(createSubscriber('take'));*/



// ------------------------
// skip
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-skip
// public skip(the:Number):Observable
//
// Returns an Observable that skip n items emitted by an Observable

/*simple$.skip(2)
    .subscribe(createSubscriber('skip'));

simple$.skip(1)
    .take(2)
    .subscribe(createSubscriber('skip/take'));*/




// ------------------------
// skipWhile
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-skipWhile
// public skipWhile(predicate:Function):Observable<T>
//
// Returns an Observable that skips all items emitted by the source Observable as long as a specified
// condition holds true, but emits all further source items as soon as the condition becomes false

/*Rx.Observable.interval(500)
    .skipWhile(i => i < 4)
    .subscribe(createSubscriber('skipWhile'));*/



// ------------------------
// takeWhile
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-takeWhile
// public takeWhile(predicate:function(value:T, index:number):boolean):Observable<T>
//
// Emits values emitted by the source Observable so long as each value satisfies the given predicate,
// and then completes as soon as this predicate is not satisfied.

/*Rx.Observable.interval(500)
    .skipWhile(i => i < 4)
    .takeWhile(i => i < 10)
    .subscribe(createSubscriber('takeWhile'));*/



// ------------------------
// skipUntil
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-skipUntil
// public skipUntil(the:Observable):Observable<T>
//
// Returns an Observable that skips items emitted by the source Observable until a second
// Observable emits an event

/*Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .subscribe(createSubscriber('skipUntil'));*/



// ------------------------
// takeUntil
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-takeUntil
// public takeUntil(notifier:Observable):Observable<T>
//
// Emits the values emitted by the source Observable until a notifier Observable emits a value.

Rx.Observable.interval(500)
    .skipUntil(Rx.Observable.timer(2000))
    .takeUntil(Rx.Observable.timer(4000))
    .subscribe(createSubscriber('takeUntil'));