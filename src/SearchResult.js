import React from 'react'
import {SearchGrid} from './SearchGrid'
import './App.css'

export const SearchResult = (props) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <SearchGrid
                    books={props.books}
                />
            </ol>
        </div>
    )
}