import React from 'react'
import './App.css'

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : this.props.value};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onMoveBook(this.state.value, event.target.value, this.props.book);
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={this.props.style}></div>
                        <div className="book-shelf-changer">
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </li>
        )
    }
}