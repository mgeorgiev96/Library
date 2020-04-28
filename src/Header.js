import React,{useEffect,useContext} from 'react'
import {BookContext} from './Context'

function Header() {
    const[books,setBooks,load,setLoad] = useContext(BookContext)
    useEffect(()=>{
        let loader= document.querySelector('.loader')
        let page_container = document.querySelector('.page_container')
        if(load==='loaded'){
            loader.style.display='block'
            page_container.style.opacity = 0.6
            page_container.style.filter = 'blur(2px)'
        }else if(load===''){
            loader.style.display='none'
            page_container.style.opacity = 1
            page_container.style.filter = 'blur(0)'
        }
    })
    return (
        <header>
            <h1>Open Library</h1>
        </header>
    )
}

export default Header;
