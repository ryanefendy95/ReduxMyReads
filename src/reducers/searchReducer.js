import {FETCH_SEARCH} from '../actions/index';

export default function (state = [], action) {
    console.log('inside searchReducer', state, action);

    switch (action.type) {
        case FETCH_SEARCH:

            return action.payload;
        default:
    }
    return state;
}