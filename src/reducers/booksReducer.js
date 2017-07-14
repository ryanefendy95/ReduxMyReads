import {FETCH_BOOKS} from '../actions/index';

export default function (state = [], action) {
    console.log('inside bookReducer BEFORE', state);

    // never mutate new state!!!
    switch (action.type) {
        case FETCH_BOOKS:
            return action.payload;
        default:
    }

    // console.log('Action received', action);
    console.log('inside bookReducer AFTER', state);

    return state;
}