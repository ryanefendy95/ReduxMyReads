import React from 'react'
import '../containers/App.css'
import {Book} from './Book'
import PropTypes from 'prop-types'

export const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books ? (
                        props.books.map((book, i) => (
                            <Book
                                key={i}
                                book={book}
                                onMoveBook={props.onMoveBook}
                            />
                        ))
                    ) : (
                        <li>No book</li>
                    )}
                </ol>
            </div>
        </div>
    )
};

Bookshelf.prototype = {
    title: PropTypes.string,
    books: PropTypes.array,
    onMoveBook: PropTypes.func
};