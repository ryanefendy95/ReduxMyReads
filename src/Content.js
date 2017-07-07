import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import './App.css'

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyReading : [],
            wantToRead: this.props.books,
            read: []
        };
        this.moveToReading = this.moveToReading.bind(this);
        this.moveToWant = this.moveToWant.bind(this);
        this.moveBook = this.moveBook.bind(this);
    }

    moveToReading(book) {
        // previous state
        this.setState((state) => ({
            currentlyReading: [...state.currentlyReading, book],
            wantToRead: state.wantToRead.filter(b => b.title !== book.title)
        }))
    }

    moveToWant(book) {
        this.setState((state) => ({
            currentlyReading: state.currentlyReading.filter(b => b.title !== book.title),
            wantToRead: [...state.wantToRead, book]
        }))
    }

    moveBook(src, dest, book) {
        this.setState((state) => ({
            src: state[src].filter(b => b.title !== book.title),
            dest: [...state[dest], book]
         }))
    }

    render() {
        return (
            <div>
                <Bookshelf
                    title="Currently Reading"
                    books={this.state.currentlyReading}
                    value="currentlyReading"
                    // onMoveToReading={this.moveToReading}
                    // onMoveToWant={this.moveToWant}
                    onMoveBook={this.moveBook}
                />
                <Bookshelf
                    title="Want to Read"
                    books={this.state.wantToRead}
                    value="wantToRead"
                    // onMoveToReading={this.moveToReading}
                    // onMoveToWant={this.moveToWant}
                    onMoveBook={this.moveBook}
                />
                <Bookshelf
                    title="Read"
                    books={this.state.read}
                    value="read"
                    // onMoveToReading={this.moveToReading}
                    // onMoveToWant={this.moveToWant}
                    onMoveBook={this.moveBook}
                />
            </div>
        )
    }
}