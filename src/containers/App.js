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
        BooksAPI.search(term, 20).then((search) => {
            if (search.error) return;
            this.setState(state => ({
                search: search.map(b => {
                    state.books.find(book => {
                        if (book.id === b.id) b.shelf = book.shelf;
                    });
                    return b
                })
            }));
        })
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