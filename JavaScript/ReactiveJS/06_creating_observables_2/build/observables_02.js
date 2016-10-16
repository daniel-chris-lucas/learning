"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const promise = new Promise((resolve, reject) => {
    console.log('IN PROMISE');
    resolve('hey');
});

promise.then(item => console.log(item));*/

// ------------------------
// Part 1
/*const simple$ = new Rx.Observable(observer => {
    console.log('Generating observable');
    setTimeout(() => {
        observer.next('An item!');
        setTimeout(() => {
            observer.next('Another item!');
            observer.complete();
        }, 1000);
    }, 1000);
});

const error$ = new Rx.Observable(observer => {
    observer.error(new Error('WHOA!'));
});

error$.subscribe(
    item => console.log(`one.next ${item}`),           // next
    error => console.log(`one.error ${error.stack}`),  // error
    () => console.log('one.complete')                  // complete
);

simple$.subscribe(
    item => console.log(`one.next ${item}`),     // next
    error => console.log(`one.error ${error}`),  // error
    () => console.log('one.complete')            // complete
);

setTimeout(() => {
    simple$.subscribe({
        next: item => console.log(`two.next ${item}`),
        error(error) {
            console.log(`two.error ${error}`)
        },
        complete: function () {
            console.log('two.complete');
        }
    });
}, 3000);*/

// ------------------------
// Part 2
function createSubscriber(tag) {
    return {
        next: function next(item) {
            console.log(tag + ".next " + item);
        },
        error: function error(_error) {
            console.log(tag + ".error " + (_error.stack || _error));
        },
        complete: function complete() {
            console.log(tag + ".complete");
        }
    };
}

function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval);
        };
    });
}

function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++count >= amount) {
                    observer.complete();
                }
            },
            error: function error(_error2) {},
            complete: function complete() {}
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));

/*setTimeout(() => {
    subscription.unsubscribe();
}, 3500);*/