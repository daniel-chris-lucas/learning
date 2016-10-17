'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_Rx2.default.Observable.range(1, 10).map(function (i) {
    return i * i;
}).scan(function (_ref, current) {
    var _ref2 = _slicedToArray(_ref, 1);

    var last = _ref2[0];
    return [current, last];
}, []).subscribe((0, _util.createSubscriber)('reduce'));