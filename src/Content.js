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
    }

    moveToReading(book) {
        // previous state
        this.setState((state) => ({
            currentlyReading: [...state.currentlyReading, book],
            wantToRead: state.wantToRead.filter(b => b.title !== book.title),
            read: state.wantToRead.filter(b => b.title !== book.title)
        }))
    }

    handleChange(book) {
        console.log(book);
    }

    render() {
        return (
            <div>
                <Bookshelf
                    title="Currently Reading"
                    books={this.state.currentlyReading}
                />
                <Bookshelf
                    title="Want to Read"
                    books={this.state.wantToRead}
                    onChange={this.handleChange}
                    onMoveToReading={this.moveToReading}
                />
                <Bookshelf
                    title="Read"
                    books={this.state.read}/>
            </div>
        )
    }
}