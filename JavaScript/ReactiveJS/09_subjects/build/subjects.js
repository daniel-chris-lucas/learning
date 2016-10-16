'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber('simple$'));

simple$.next('HELLO');
simple$.next('WORLD');
simple$.complete();*/

/*const interval$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();
interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe(createSubscriber('sub1'));
intervalSubject$.subscribe(createSubscriber('sub2'));
intervalSubject$.subscribe(createSubscriber('sub3'));

setTimeout(() => {
    intervalSubject$.subscribe(createSubscriber('LOOK AT ME'));
}, 2000);*/

// const currentUser$ = new Rx.Subject();
// Use BehaviorSubject to be sure to always have the latest value.
// BehaviorSubjects are useful for having values over time.
// Better to use than Subject when using deferred subscriptions
/*const currentUser$ = new Rx.BehaviorSubject({ isLoggedIn: false });
const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

currentUser$.next({ isLoggedIn: false });
isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));

setTimeout(() => {
    currentUser$.next({ isLoggedIn: true, name: 'nelson' });
}, 2000);

setTimeout(() => {
    isLoggedIn$.subscribe(createSubscriber('delayed'));
});*/

// ReplaySubject is similar to BehaviorSubject but it can also record old values.
// When creating specify how many values to replay
/*const replay$ = new Rx.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe(createSubscriber('one'));

replay$.next(3);
replay$.next(4);
replay$.next(5);

replay$.subscribe(createSubscriber('two'));

replay$.next(6);*/

// The AsyncSubject is a variant where only the last value of the Observable execution
// is sent to its observers, and only when the execution completes.
var apiCall$ = new _Rx2.default.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe((0, _util.createSubscriber)('one'));
apiCall$.next(2);
apiCall$.complete();

setTimeout(function () {
    apiCall$.subscribe((0, _util.createSubscriber)('two'));
});