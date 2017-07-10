import React, {Component} from 'react'
import './App.css'
import Book from './Book'

export default class Bookshelf extends Component {
    moveBook = this.props.onMoveBook;

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books ? (
                            this.props.books.map((book, i) => (
                                    <Book
                                        key={i}
                                        book={book}
                                        onMoveBook={this.moveBook}
                                    />
                            ))
                            ) : (
                                <li>No book</li>
                            )}
                    </ol>
                </div>
            </div>
        )
    }
}