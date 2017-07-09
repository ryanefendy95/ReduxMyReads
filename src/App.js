import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Title} from './Title'
import {Search} from './Search'
import {Content} from './Content'
import {SearchBar} from './SearchBar'
import {SearchResult} from './SearchResult'
import './App.css'

class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            showSearchPage: true,
            currentlyReading: [],
            wantToRead: [
                {
                    "title": "To Kill a Mockingbird",
                    "authors": "Harper Lee",
                    "url": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                },
                {
                    "title": "Ender's Game",
                    "authors": "Orson Scott Card",
                    "url": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
                },
                {
                    "title": "1776",
                    "authors": "David McCullough",
                    "url": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
                },
                {
                    "title": "Harry Potter and the Sorcerer's Stone",
                    "authors": "J.K. Rowling",
                    "url": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
                },
                {
                    "title": "The Hobbit",
                    "authors": "J.R.R. Tolkien",
                    "url": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
                },
                {
                    "title": "Oh, the Places You'll Go!",
                    "authors": "Seuss",
                    "url": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
                },
                {
                    "title": "The Adventures of Tom Sawyer",
                    "authors": "Mark Twain",
                    "url": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
                },
            ],
            read: [],
            search: []
        };
        this.handleMoveBook = this.handleMoveBook.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({showSearchPage: !this.state.showSearchPage});
    }

    handleMoveBook(src, dest, book) {
        // create a new object reference for state
        let newState = Object.assign({}, this.state);

        // modify state contents by key
        newState[src] = newState[src].filter(b => b.title !== book.title);
        newState[dest] = [...newState[dest], book];

        // set state to newState
        this.setState(newState);
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({
            search: books
        }))
    }

    render() {
        console.log(this.state.search);
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <SearchBar onClick={this.handleClick}/>
                        <SearchResult books={this.state.search}/>
                    </div>
                ) : (
                    <div className="list-books">
                        <Title/>
                        <Content
                            currentlyReading={this.state.currentlyReading}
                            wantToRead={this.state.wantToRead}
                            read={this.state.read}
                            onMoveBook={this.handleMoveBook}
                        />
                        <Search
                            onClick={() => this.handleClick()}
                            books={this.state.others}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
