import { FETCH_ACTIVE_POST } from '../actions';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_ACTIVE_POST:
            return action.payload;
        default:
            return state;
    }
}