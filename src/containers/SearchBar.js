import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './App.css'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    // onInputChange(term) {
    //     if(term) {
    //         this.setState({term: term.trim()});
    //         this.props.onSearch(term.trim());
    //     } else {
    //         this.setState({term: ''});
    //     }
    // };

    onInputChange(term) {
        this.props.onInputChange(term);
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        value={this.props.term}
                        type="text"
                        placeholder="Search by title or author"
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </div>
            </div>
        )
    }
}

// static propTypes = {
//     booksOnShelf: PropTypes.array,
//     onMoveBook: PropTypes.func.isRequired
// }