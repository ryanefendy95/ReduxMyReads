import React from 'react'
import './App.css'

// export const Book = (props) => {
//     return (
//         <div className="book">
//             <div className="book-top">
//                 <div className="book-cover" style={props.style}></div>
//                 <div className="book-shelf-changer">
//                     <select onChange={props.onChange}>
//                         <option value="none" disabled>Move to...</option>
//                         <option value="currentlyReading">Currently Reading</option>
//                         <option value="wantToRead">Want to Read</option>
//                         <option value="read">Read</option>
//                         <option value="none">None</option>
//                     </select>
//                 </div>
//             </div>
//             <div className="book-title">{props.title}</div>
//             <div className="book-authors">{props.authors}</div>
//         </div>
//     )
// }

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf: 0
        }
    }

    handleChange() {
        console.log('change...');
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={this.props.style}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange }>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}