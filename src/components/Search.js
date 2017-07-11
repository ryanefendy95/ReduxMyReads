import React from 'react'
import {Link} from 'react-router-dom'
import '../containers/App.css'

export const Search = () => {
    return (
        <div className="open-search">
            <Link
                to="/search"
            >Add a book</Link>
        </div>
    )
};
