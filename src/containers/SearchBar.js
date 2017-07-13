import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export const SearchBar = (props) => {
    return (
        <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
                <input
                    value={props.term}
                    type="text"
                    placeholder="Search by title or author"
                    onChange={event =>  props.onInputChange(event.target.value)}
                />
            </div>
        </div>
    )
};

// static propTypes = {
//     booksOnShelf: PropTypes.array,
//     onMoveBook: PropTypes.func.isRequired
// }