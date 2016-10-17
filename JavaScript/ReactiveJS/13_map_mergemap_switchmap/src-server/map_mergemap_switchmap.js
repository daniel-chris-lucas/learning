import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// ------------------------
// map
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-map
// map(project:function(value:T, index:number):R, thisArg:any):Observable<R>
//
// Applies a fiven project function to each value emitted by the source Observable
// and emits the resulting values as an Observable.

/*Rx.Observable.interval(1000)
    .take(3)
    .map(a => a * a)
    .subscribe(createSubscriber('map'));*/



/*
// Example to figure out mergeMap.
// With albums will return an array of arrays of tracks.
function arrayMap(array, projection) {
    const returnArray = [];

    for (let item of array) {
        const projected = projection(item);
        returnArray.push(projected);
    }

    return returnArray;
}

// With albums returns array of tracks
function arrayMergeMap(array, projection) {
    const returnArray = [];

    for (let item of array) {
        const projectedArray = projection(item);
        for (let projected of projectedArray) {
            returnArray.push(projected);
        }
    }

    return returnArray;
}

const albums = [
    {title: "Album 1", tracks: [{id: 1, title: 'Track 1'}, {id: 2, title: 'Track 2'}]},
    {title: "Album 2", tracks: [{id: 1, title: 'Track 43'}, {id: 2, title: 'Track 432'}]}
];

const tracksWrong = arrayMap(albums, album => album.tracks);
const tracksRight = arrayMergeMap(albums, album => album.tracks);

// console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight));
*/

// ------------------------
// mergeMap
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-mergeMap
// public mergeMap(project:function(value:T, ?index:number):Observable, resultSelector:function(outerValue:T, innerValue:I, outerIndex: number, innerIndex:number):any, concurrent:number):Observable
//
// Projects each source value to an Observable which is merged in the output Observable.

// Rx.Observable.range(2, 3)
//     .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `After ${i} Seconds`))
//     .subscribe(createSubscriber('mergeMap'));

/*Rx.Observable.fromPromise(getTracks())
    .mergeMap(tracks => Rx.Observable.from(tracks))
    .subscribe(createSubscriber('tracks'));

function getTracks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['track 1', 'track 2', 'track 3']);
        }, 1000);
    });
}*/

/*Rx.Observable.of('my query')
    .do(() => console.log('Querying'))
    .mergeMap(a => query(a))
    .do(() => console.log('After querying'))
    .subscribe(createSubscriber('query'));

function query(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('THIS IS THE VALUE');
        }, 1000);
    });
}*/



// ------------------------
// switchMap
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-switchMap
// public switchMap(project:function(value:T, ?index:number):Observable, resultSelector:function(outerValue:T, innerValue:I, outerIndex:number):any):Observable
//
// Projects each source value to an Observable which is merged in the output Observable,
// emitting values only from the most recently projected Observable.

Rx.Observable.of('my query')
    .do(() => console.log('Querying'))
    .switchMap(a => query(a))
    .do(() => console.log('After querying'))
    .subscribe(createSubscriber('query'));

function query(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('THIS IS THE VALUE');
        }, 1000);
    });
}