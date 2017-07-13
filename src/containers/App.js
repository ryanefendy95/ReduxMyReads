import _ from 'lodash'
import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import {Title} from '../components/Title'
import {Search} from '../components/Search'
import {Content} from '../components/Content'
import {SearchBar} from './SearchBar'
import {SearchResult} from '../components/SearchResult'
import './App.css'
import {BrowserRouter, Route} from 'react-router-dom'

export default class BooksApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            search: [],
            term: ''
        };
        this.handleMoveBook = this.handleMoveBook.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSearch = _.debounce(this.handleSearch, 300);
    }

    handleMoveBook(book, shelf) {
        if (book.shelf !== shelf) {
            BooksAPI.update(book, shelf).then(() => {
                    book.shelf = shelf;
                    this.setState(state => ({
                        books: state.books.filter(b => b.id !== book.id).concat([book])
                    }))
                }
            )
        }
    }

    handleSearch(term) {
        BooksAPI.search(term, 20).then((searchResults) => {
            if (searchResults.error) return;

            this.setState(state => {
                // create a new array called mergedBooks
                const mergedBooks = searchResults.map(searchResult => {

                    // grab the existing book from your library if it exists
                    const existingBook = state.books.find(book => book.id === searchResult.id);

                    // overwrite the search result shelf IF book exists
                    if (existingBook) {
                        searchResult.shelf = existingBook.shelf
                    }

                    // add the searchResult, modified or not, to the mergedBooks array
                    return searchResult
                });

                // return a state object for setState
                return { search: mergedBooks };
            });
        });
    }

    handleInputChange(term) {
        if (term) {
            this.setState({term});
            this.handleSearch(term);
        } else {
            this.setState({term: ''});
        }
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {
        const currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
        const wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
        const readAlready = this.state.books.filter(book => book.shelf === 'read');

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
                                onSearch={(term) => this.handleSearch(term)}
                                term={this.state.term}
                                onInputChange={this.handleInputChange}
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