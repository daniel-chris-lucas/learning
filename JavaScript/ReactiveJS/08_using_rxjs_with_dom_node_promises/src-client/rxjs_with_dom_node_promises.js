import $ from 'jquery';
import Rx from "rxjs/Rx";

const $title = $('#title');
const $results = $('#results');

// ------------------------
// fromEvent
//
// public static fromEvent(target:EventTargetLike, eventName:string, selector:function(...args:any):T):Observable<T>
//
// Creates an Observable that emits events of a specific type coming from the given event
// target.
Rx.Observable.fromEvent($title, 'keyup')
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe(items => {
        $results.empty();
        $results.append(items.map(i => $(`<li />`).text(i)));
    });

// ------------------------
// Library
function getItems(title) {
    console.log(`Querying ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "Item 2", `Another ${Math.random()}`]);
        }, 500 + (Math.random() * 200));
    });
}