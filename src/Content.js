import React, {Component} from 'react'
import Bookshelf from './Bookshelf1'
import Bookshelf2 from './Bookshelf2'
import Bookshelf3 from './Bookshelf3'
import './App.css'

export default class Content extends Component {
    render() {
        return (
            <div>
                <Bookshelf title="Currently Reading"/>
                <Bookshelf2 title="Want to Read"/>
                <Bookshelf3 title="Read"/>
            </div>
        )
    }
}