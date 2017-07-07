import React, {Component} from 'react'
import './App.css'
import Book from './Book'

export default class Bookshelf extends Component {
    render() {
        console.log(this.props.books);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.length !== 0 ? (
                            this.props.books.map((book, i) => (
                                    <Book
                                        key={i}
                                        title={book.title}
                                        authors={book.authors}
                                        style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}
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