import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, category, price, pages, writer, img, published, language } = props.book;
    return (
        <div className='col'>
            <div className='card h-100 style'>
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
                <div className='card-footer d-flex justify-content-around'>
                    <button>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
                </div>
            </div>
        </div>
    );
};
export default Book;