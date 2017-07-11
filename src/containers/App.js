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
            books: []
        };
        this.currentlyReading = [];
        this.wantToRead = [];
        this.readAlready = [];
        this.search = [];
        this.handleMoveBook = this.handleMoveBook.bind(this);
    }

    handleMoveBook(book, shelf) {
        BooksAPI.update(book, shelf).then(
            this.setState(state => ({
                books: state.books.map(b => {
                    if (b.id === book.id) b.shelf = shelf;
                    return b;
                })
            }))
        );
    }

    handleSearch(term) {
        //todo prevent empty search
        BooksAPI.search(term).then((books) => {
            this.setState((prevState) => ({
                books: Array.from(new Set([...prevState.books, ...books])),
            }));

        })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {
        this.currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
        this.wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
        this.readAlready = this.state.books.filter(book => book.shelf === 'read');
        this.search = this.state.books.filter(book => book.shelf === 'none');
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
                                currentlyReading={this.currentlyReading}
                                wantToRead={this.wantToRead}
                                readAlready={this.readAlready}
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
                                books={this.search}
                                onMoveBook={this.handleMoveBook}
                            />
                        </div>
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}