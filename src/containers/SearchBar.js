import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearch(term)
    };

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        value={this.state.term}
                        type="text"
                        placeholder="Search by title or author"
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </div>
            </div>
        )
    }
}