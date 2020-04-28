import React from 'react'

function Items(props) {
    return (
        <div className='book'>
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <p>{props.author}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default Items;
