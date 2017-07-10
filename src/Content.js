import React from 'react'
import Bookshelf from './Bookshelf'
import './App.css'

export const Content = (props) => {
    // todo: how to refactor to be dynamic
    return (
        <div>
            <Bookshelf
                title="Currently Reading"
                books={props.currentlyReading}
                onMoveBook={props.onMoveBook}
            />
            <Bookshelf
                title="Want to Read"
                books={props.wantToRead}
                onMoveBook={props.onMoveBook}
            />
            <Bookshelf
                title="Read"
                books={props.readAlready}
                onMoveBook={props.onMoveBook}
            />
        </div>
    )
};