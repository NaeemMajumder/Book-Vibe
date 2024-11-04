import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    let [booksData, setBooksData] = useState([]);

    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data=>setBooksData(data));
    },[])

    return (
        <div>

            <p>Books: {booksData.length}</p>

            <div className='grid grid-cols-3 gap-8'>
                {
                    booksData.map((book, index)=><Book key={index} book={book}></Book>)
                }    
            </div>

            
        </div>
    );
};

export default Books;