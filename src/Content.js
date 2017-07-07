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

    render() {
        return (
            <div>
                <Bookshelf title="Currently Reading" books={this.state.currentlyReading}/>
                <Bookshelf title="Want to Read" books={this.state.wantToRead}/>
                <Bookshelf title="Read" books={this.state.read}/>
            </div>
        )
    }
}