import _ from 'lodash'
import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import {Title} from '../components/Title'
import {Search} from '../components/Search'
import {Content} from '../components/Content'
import SearchBar from './SearchBar'
import {SearchResult} from '../components/SearchResult'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'

export default class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [], // books in shelves
            search: [] // books returned from search
        };
        this.handleMoveBook = this.handleMoveBook.bind(this);
    }

    handleMoveBook(book, shelf) {
        if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                    // this.setState(state => ({
                    //     books: state.books.map(b => {
                    //         if (b.id === book.id) b.shelf = shelf;
                    //         return b;
                    //     })
                    // }))
                book.shelf = shelf;
                this.setState(state => {
                    // todo: need to fix
                    books: state.books.filter(b => b.id !== book.id).concat([book])
                })}
            );
        }
    }

    handleSearch(term) {
        //todo prevent empty search
        BooksAPI.search(term).then((books) => {
            this.setState((prevState) => ({
                search: Array.from(new Set([...prevState.search, ...books])),
            }));

        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {
        const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
        const readAlready = this.state.books.filter(book => book.shelf === 'read');
        const search = this.state.books.filter(book => book.shelf === 'none');
        const bookSearch = _.debounce((term) => {
            this.handleSearch(term)
        }, 300);

        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={() => (
                        <div className="list-books">
                            <Title/>
                            <Content
                                currentlyReading={currentlyReading}
                                wantToRead={wantToRead}
                                readAlready={readAlready}
                                onMoveBook={this.handleMoveBook}
                            />
                            <Search/>
                        </div>
                    )}/>
                    <Route exact path="/search" render={() => (
                        <div className="search-books">
                            <SearchBar
                                onSearch={bookSearch}
                            />
                            <SearchResult
                                books={this.state.search}
                                onMoveBook={this.handleMoveBook}
                            />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}