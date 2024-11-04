import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    // console.log(book)

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className='h-[300px]'>
            <img className='object-fit'
            src={book.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <div className="card-actions justify-end">
                {
                    book.tags.map((tag, idx)=><div key={idx} className="badge badge-outline text-green-700 font-bold bg-green-100">{tag}</div>)
                }
                
            </div>
            <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
            <p className='text-sm'>By: {book.author}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/book/${book.bookId}`}>Buy Now</Link></button>
            
            </div>
        </div>
        </div>
    );
};

export default Book;