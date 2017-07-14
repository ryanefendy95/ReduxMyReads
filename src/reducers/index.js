import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    books: booksReducer,
    search: searchReducer
});

export default rootReducer;