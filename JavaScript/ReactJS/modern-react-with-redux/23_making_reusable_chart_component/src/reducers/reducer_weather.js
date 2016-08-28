import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Do not use state.push. This would modify the existing state
            // which is to be avoided at all costs.
            
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];
    }

    return state;
}
