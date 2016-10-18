import Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// ------------------------
// throw
//
// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-throw
// public static throw(error:any, scheduler:Scheduler):Observable
//
// Creates an Observable that emits no items to the Observer and immediately emits an error
// notification.

/*Rx.Observable.concat(
    Rx.Observable.of(42),
    Rx.Observable.throw(new Error('BLEGH')),
    Rx.Observable.of(10)
)
    .subscribe(createSubscriber('catch'));*/

// ------------------------
// catch
//
// public catch(err:any, caught:Observable<T>):Observable<R>
// 
// Catches errors on the Observable to be handled by returning a new Observable or throwing an error.

// Rx.Observable.fromPromise(getApi())
getApi()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .do(() => console.log('THING'))
    .subscribe(createSubscriber('api'));

// function getApi() {
//     console.log('Getting API');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Hello');
//             reject(new Error());
//         }, 1000);
//     });
// }

function getApi() {
    return new Rx.Observable(observer => {
        console.log('Getting API');
        setTimeout(() => {
            // observer.next('HEY');
            // observer.complete();
            observer.error(new Error());
        }, 1000);
    });
}