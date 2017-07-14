import {FETCH_SEARCH} from '../actions/index';

export default function (state = [], action) {
    console.log('inside searchReducer BEFORE', state);

    switch (action.type) {
        case FETCH_SEARCH:

            return action.payload;
        default:
    }

    console.log('inside searchReducer AFTER', state);

    return state;
}