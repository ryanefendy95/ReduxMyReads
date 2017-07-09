import React from 'react'
import './App.css'
import Book from './Book'

export const SearchGrid = (props) => {
    // moveBook = this.props.onMoveBook;
    const bookList = props.books.map((book, i) => {
        return (
            <Book
                key={i}
                title={book.title}
                authors={book.authors}
                style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                book={book}
                value={props.value}
            />
        )
    });

    return (
        <div>
            {bookList}
        </div>
    )
};