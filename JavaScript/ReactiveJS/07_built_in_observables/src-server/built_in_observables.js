import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// ------------------------
// interval
//
// public static interval(period:number, scheduler:Scheduler):Observable
// 
// Creates an Observable that emits sequential numbers every specified interval of time,
// on a specified Scheduler.

Rx.Observable.interval(500)
    .take(5)
    .subscribe(createSubscriber('one'));
    

// ------------------------
// timer
//
// public static timer(initialDelay:number|Date, period:number, scheduler:Scheduler):Observable
//
// Creates an Observable that starts emitting after an initialDelay and emits ever increasing
// numbers after each period of time thereafter.

Rx.Observable.timer(1000, 500)
    .take(3)
    .subscribe(createSubscriber('timer'));


// ------------------------
// of
//
// public static of(values:...T, scheduler:Scheduler):Observable<T>
//
// Creates an Observable that emits some values you specify as arguments, immediately one after
// the other, and then emits a complete notification.

Rx.Observable.of("HELLO, WORLD", 42, "whoa")
    .subscribe(createSubscriber('of'));


// ------------------------
// from
//
// public static from(ish:ObservableInput<T>, mapFn:function(x:any, i:number):T, thisArg:any, scheduler:Scheduler):Observable<T>
//
// Creates an Observable from an Array, an array-like object, a Promise, an iterable object
// or an Observable-like object.

Rx.Observable.from([23, 10, 4])
    .subscribe(createSubscriber('from'));

Rx.Observable.from([1, 2, 3, 4, 5])
    .map(i => i * 5)
    .subscribe(createSubscriber('from'));


// ------------------------
// throw
//
// public static throw(error:any, scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits an error
// notification.

Rx.Observable.throw(new Error('HEY'))
    .subscribe(createSubscriber('error'));


// ------------------------
// empty
//
// public static empty(scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits a
// complete notification.

Rx.Observable.empty()
    .subscribe(createSubscriber('empty'));


// ------------------------
// defer
//
// public static defer(observableFactory:function():Observable|Promise):Observable
//
// Creates an Observable that, on subscribe, calls an Observable factory to make an
// Observable for each new Observer.

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber('defer$.one'));
defer$.subscribe(createSubscriber('defer$.two'));
defer$.subscribe(createSubscriber('defer$.three'));


// ------------------------
// never
//
// public static never():Observable
//
// Creates an Observable that emits no items to the Observer.

Rx.Observable.never()
    .subscribe(createSubscriber('never'));


// ------------------------
// range
//
// public static range(start:number, count:number, scheduler:Scheduler):Observable
//
// Creates an Observable that emits a sequence of numbers within a specified range.

Rx.Observable.range(10, 30)
    .subscribe(createSubscriber('range'));