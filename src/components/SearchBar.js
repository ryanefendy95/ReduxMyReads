import React from 'react'
import {Link} from 'react-router-dom'
import '../containers/App.css'
import PropTypes from 'prop-types'

export const SearchBar = (props) => {
    return (
        <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
                <input
                    value={props.term}
                    type="text"
                    placeholder="Search by title or author"
                    onChange={event => props.onInputChange(event.target.value)}
                />
            </div>
        </div>
    )
};

SearchBar.prototype = {
    onSearch: PropTypes.func,
    term: PropTypes.string,
    onInputChange: PropTypes.func
};