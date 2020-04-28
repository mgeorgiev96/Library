import React, { createContext,useState } from 'react';


export const BookContext = createContext()

export const BookProvider = (props)=>{
    const [books,setBooks] = useState([])
    const [load,setLoad] = useState('')
    return(
        <BookContext.Provider value={[books,setBooks,load,setLoad]}>
            {props.children}
        </BookContext.Provider>
    )
}