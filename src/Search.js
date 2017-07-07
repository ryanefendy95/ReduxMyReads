import React from 'react'
import './App.css'

export const Search = (props) => {
    return (
        <div className="open-search">
            <a onClick={props.onClick}>Add a book</a>
        </div>
    )
};
