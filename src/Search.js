import React, { useContext } from 'react'
import {BookContext} from './Context'


function Search() {

    const [books,setBooks,load,setLoad] = useContext(BookContext)
    const searchBooks = ()=>{
        setLoad('loaded')
        let input = document.querySelector('.book_value').value
        fetch('https://openlibrary.org/search.json?q=' + input).then(i=>i.json())
        .then(i=>setBooks(i.docs)).then(i=>setLoad(''))
        
    }
    return (
        <div className='search_container'>
            <input className='book_value' autoFocus placeholder='Search for books...'></input>
            <i onClick={searchBooks} className='fa fa-book'></i>
            <span></span>
            <span></span>
        </div>
    )
}

export default Search;
