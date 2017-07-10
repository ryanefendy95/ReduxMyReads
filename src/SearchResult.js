import React from 'react'
import Book from './Book'
import './App.css'

export const SearchResult = (props) => {
    if(!props.books) {
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