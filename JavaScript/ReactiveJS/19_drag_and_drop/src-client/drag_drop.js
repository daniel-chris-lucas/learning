import $ from 'jquery';
import Rx from 'rxjs/Rx';

const $drag = $('#drag');
const $document = $(document);
const $dropAreas = $('.drop-area');

const beginDrag$ = Rx.Observable.fromEvent($drag, 'mousedown');
const endDrag$ = Rx.Observable.fromEvent($document, 'mouseup');
const mouseMove$ = Rx.Observable.fromEvent($document, 'mousemove');

const currentOverArea$ = Rx.Observable.merge(
    Rx.Observable.fromEvent($dropAreas, 'mouseover').map(e => $(e.target)),
    Rx.Observable.fromEvent($dropAreas, 'mouseout').map(e => null)
);

const drops$ = beginDrag$
    .do(e => {
        e.preventDefault();
        $drag.addClass('dragging');
    })
    .mergeMap(startEvent => {
        return mouseMove$
            .takeUntil(endDrag$)
            .do(moveEvent => moveDrag(startEvent, moveEvent))
            .last()
            .withLatestFrom(currentOverArea$, (_, $area) => $area);
    })
    .do(() => {
        $drag.removeClass('dragging')
            .animate({ top: 0, left: 0 }, 250);
    });

drops$.subscribe($dropArea => {
    $dropAreas.removeClass('dropped');

    if ($dropArea) {
        $dropArea.addClass('dropped');
    }
});

function moveDrag(startEvent, moveEvent) {
    $drag.css({
        left: moveEvent.clientX - startEvent.offsetX,
        top: moveEvent.clientY - startEvent.offsetY
    });
}