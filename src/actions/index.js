import * as BooksAPI from '../BooksAPI'

export const FETCH_BOOKS = 'FETCH_BOOKS';

// actionCreator returns action(just an object w/ type & payload)
export function fetchBooks() {
    const booksRequest = BooksAPI.getAll();

    // console.log(booksRequest);

    return {
        type: FETCH_BOOKS,
        payload: booksRequest
    }
}

export function fetchSearch() {
    const booksRequest = BooksAPI.getAll();

    // console.log(booksRequest);

    return {
        type: FETCH_BOOKS,
        payload: booksRequest
    }
}