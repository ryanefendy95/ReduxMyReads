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
                value="currentlyReading"
                onMoveBook={props.onMoveBook}
            />
            <Bookshelf
                title="Want to Read"
                books={props.wantToRead}
                value="wantToRead"
                onMoveBook={props.onMoveBook}
            />
            <Bookshelf
                title="Read"
                books={props.read}
                value="read"
                onMoveBook={props.onMoveBook}
            />
        </div>
    )
}