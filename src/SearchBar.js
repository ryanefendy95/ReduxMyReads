import React from 'react'
import './App.css'

export const SearchBar = (props) => {
    return (
        <div className="search-books-bar">
            <a className="close-search" onClick={() => props.onClick()}>Close</a>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
            </div>
        </div>
    )
}