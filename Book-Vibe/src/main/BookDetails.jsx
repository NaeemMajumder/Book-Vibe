import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const BookDetails = () => {

    let navigate = useNavigate();

    let params = useParams();
    let id = parseInt(params.bookId);

    let booksData = useLoaderData();
    // console.log(booksData);/

    let book = booksData.find(bookData=>bookData.bookId === id)
    console.log(book)

    return (
        <div>
            <h1>Book details: {id}</h1>

                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-6">
                        <img
                        src={book.image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{book.bookName}</h1>
                            <p className="py-6">By: {book.author}</p>
                            <button onClick={() => navigate(-1)} className="btn mr-4 btn-primary">Go Back</button>
                            <button className="btn btn-outline mr-4 btn-accent">Read</button>
                            <button className="btn btn-outline btn-accent">WishList</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BookDetails;