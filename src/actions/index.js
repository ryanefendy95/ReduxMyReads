import * as BooksAPI from '../BooksAPI'

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_SEARCH = 'FETCH_SEARCH';

// actionCreator returns action(just an object w/ type & payload)
export function fetchBooks() {
    return {
        type: FETCH_BOOKS,
        payload: BooksAPI.getAll()
    }
}

export function fetchSearch(term) {
    return {
        type: FETCH_SEARCH,
        payload: BooksAPI.search(term, 20)
    }
}

// export function moveBook(book, shelf) {
//     return {
//         type: FETCH_SEARCH,
//         payload: BooksAPI.search(term, 20)
//     }
// }