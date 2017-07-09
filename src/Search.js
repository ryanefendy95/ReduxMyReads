import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export const Search = (props) => {
    return (
        <div className="open-search">
            <Link
                to="/search"
            >Add a book</Link>
        </div>
    )
};
