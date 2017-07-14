import {FETCH_BOOKS} from '../actions/index';

export default function (state = [], action) {
    // never mutate new state!!!
    switch (action.type) {
        case FETCH_BOOKS:
            return action.payload;
        default:
    }

    // console.log('Action received', action);

    return state;
}