import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Book.css'

const Book = ({ book, HandleCart }) => {
    const { name, category, price, pages, writer, img, published, language } = book;
    return (
        <div className='col'>
            <div className='card h-100 card-style'>
                <img src={img} className="card-img-top w-50 m-auto mt-5 mb-3" alt="" />
                <div className='card-body'>
                    <h5 className='card-title fw-bold'> {name}</h5>
                    <p>Published: {published}</p>
                    <p className='fw-bold'>Writer: {writer}</p>
                    <p>Category: {category}</p>
                    <p>Pages: {pages}</p>
                    <p>Language: {language}</p>
                    <h5 className='fw-bold'>Price : ${price}</h5>
                </div>
                <button onClick={() => HandleCart(book)} className='btn-style py-2 border-0'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};
export default Book;