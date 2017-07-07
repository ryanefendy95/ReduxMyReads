import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import './App.css'

export default class Content extends Component {
    handleMoveBook = this.props.onMoveBook;

    render() {
        return (
            <div>
                <Bookshelf
                    title="Currently Reading"
                    books={this.props.currentlyReading}
                    value="currentlyReading"
                    onMoveBook={this.handleMoveBook}
                />
                <Bookshelf
                    title="Want to Read"
                    books={this.props.wantToRead}
                    value="wantToRead"
                    onMoveBook={this.handleMoveBook}
                />
                <Bookshelf
                    title="Read"
                    books={this.props.read}
                    value="read"
                    onMoveBook={this.handleMoveBook}
                />
            </div>
        )
    }
}