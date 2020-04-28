import React,{useContext} from 'react'
import Items from './Items'
import {BookContext} from './Context'

function Books() {

const[books,setBooks,load,setLoad] = useContext(BookContext)

    return (
        <div className='container'>
            {books.map(i=>
            <Items key={Math.random()*1000} title={i.title} author={i.author_name} year={i.publish_date} 
            image={i.cover_edition_key==undefined? require('./images/unnamed.jpg'):'http://covers.openlibrary.org/b/olid/'+i.cover_edition_key+'-L.jpg'}/>)}
        </div>
    )
}
export default Books;
