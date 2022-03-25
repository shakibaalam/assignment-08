
import React, { useEffect, useState } from 'react';
import './Cards.css'
import Book from '../Book/Book';

const Cards = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center text-white mb-5'> The <span className='story'>........Story........</span> Keeper</h1>
            <div className='row'>
                <div className="col-9 col-sm-8">
                    <div className='row row-cols-1 row-cols-md-3 g-5'>
                        {
                            books.map(book => <Book
                                key={book.id}
                                book={book}
                            ></Book>)
                        }
                    </div>
                </div>
                <div className='col-3 col-sm-4'>
                    <div className=' select-style'>
                        <h2 className='text-white'>Selected Items</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;