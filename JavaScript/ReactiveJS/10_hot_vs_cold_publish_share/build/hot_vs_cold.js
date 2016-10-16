'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------
// publish
//
// public publish(Optional:Function):*
//
// Returns a ConnectableObservable, which is a variety of Observable that waits until
// its connect method is called before it begins emitting items to those Observers that
// have subsribed to it.
/*const interval$ = Rx.Observable.interval(1000)
    .take(10)
    .publish();

setTimeout(() => {
    interval$.connect();
}, 5000);

setTimeout(() => {
    interval$.subscribe(createSubscriber('one'));
}, 1200);

setTimeout(() => {
    interval$.subscribe(createSubscriber('two'));
}, 3200);*/

/*const socket = { on: () => { } };

const chatMessages$ = new Rx.Observable(observer => {
    console.log('subscribed');
    socket.on('chat:message', message => observer.next(message));
}).publish();

chatMessages$.connect();

chatMessages$.subscribe(createSubscriber('one'));
chatMessages$.subscribe(createSubscriber('two'));*/

/*const simple$ = new Rx.Observable(observer => {
    observer.next('one');
    observer.next('two');
    observer.next('three');
    observer.complete();

    return () => console.log('Disposed');
});

const published$ = simple$.publishLast();
// const published = simple$.publishReplay(2);

const sub1 = published$.subscribe(createSubscriber('one'));
const connection = published$.connect();
const sub2 = published$.subscribe(createSubscriber('two'));

connection.unsubscribe();*/

var simple$ = new _Rx2.default.Observable(function (observer) {
    observer.next('one');
    observer.next('two');
    observer.next('three');

    return function () {
        return console.log('Disposed');
    };
});

// const published$ = simple$.publish().refCount();
// const published$ = simple$.publishReplay(2).refCount();
var published$ = simple$.share(); // = .publish().refCount();

var sub1 = published$.subscribe((0, _util.createSubscriber)('one'));
var sub2 = published$.subscribe((0, _util.createSubscriber)('two'));

sub1.unsubscribe();
sub2.unsubscribe();