import React from 'react'
import {Book} from './Book'
import '../containers/App.css'
import PropTypes from 'prop-types'

export const SearchResult = (props) => {
    if (!props.books) {
        return <div>Loading...</div>
    }

    const bookList = props.books.map((book, i) => {
        return (
            <Book
                key={i}
                book={book}
                onMoveBook={props.onMoveBook}
            />
        )
    });

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {bookList}
            </ol>
        </div>
    )
};

SearchResult.prototype = {
    books: PropTypes.array,
    onMoveBook: PropTypes.func
};