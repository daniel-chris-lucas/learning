import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Example to understand reduce
/*
function arrayReduce(array, accumulator, startValue) {
    let value = startValue;

    for (let item of array) {
        value = accumulator(value, item);
    }

    return value;
}

const values = [342, 432, 23, 1, 4];
const sum = arrayReduce(values, (acc, i) => acc + i, 0);
console.log(sum);

// const max = arrayReduce(
//     values,
//     function (acc, value) {
//         if (value > acc) {
//             return value;
//         }
// 
//         return acc;
//     },
//     -1
// );

const max = arrayReduce(values, Math.max, -1);
console.log(max);
*/

// ------------------------
// reduce
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-reduce
// public reduce(accumulator:function(acc:R, value:T):R, seed:R):Observable<R>
//
// Applies an accumulator function over the source Observable, and returns the accumulated
// result when the source completes, given an optional seed value.

/*Rx.Observable.range(1, 10)
    .reduce((acc, value) => acc + value)
    .subscribe(createSubscriber('reduce'));*/



// ------------------------
// scan
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-scan
// public scan(accumulator:function(acc:R, value:T, index:number):R, seed:T|R):Observable<R>
//
// Applies an accumulator function over the source Observable, and returns each intermediate
// result, with an optional seed value.

// Rx.Observable.range(1, 10)
//     .scan((acc, value) => acc + value)
//     .subscribe(createSubscriber('reduce'));

Rx.Observable.range(1, 10)
    .map(i => i * i)
    .scan(([last], current) => [current, last], [])
    .subscribe(createSubscriber('reduce'));