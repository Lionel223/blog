import { FETCH_POST } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_POST:
            // console.log('at Reducer: ', action.payload);
            return action.payload;
        default:
            return state;
    }
}