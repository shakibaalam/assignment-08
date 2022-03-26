
import React, { useEffect, useState } from 'react';
import './Cards.css'
import Book from '../Book/Book';
import Cart from '../Cart/Cart';

const Cards = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    const [cart, setCart] = useState([]);
    const HandleCart = (selectedBook) => {
        if (cart.length < 4) {
            const added = cart.find(item => item.id === selectedBook.id);
            if (!added) {
                const newcart = [...cart, selectedBook];
                setCart(newcart);
            }
        }
    }
    const DeleteAll = () => {
        setCart([]);
    }
    const ChooseOne = () => {

    }

    return (
        <div className=''>
            <h1 className='text-center mb-5 fw-bold'> The <span className='story'>........Story........</span> Keeper</h1>
            <div className='row'>
                <div className=" col-md-9 col-7">
                    <div className='row row-cols-1 row-cols-md-3 g-5'>
                        {
                            books.map(book => <Book
                                key={book.id}
                                book={book}
                                HandleCart={HandleCart}
                            ></Book>)
                        }
                    </div>
                </div>
                <div className='col-md-3 col-5'>
                    <div className='select-style'>
                        <h4 className='fw-bold'>Selected Books: {cart.length}</h4>
                        {
                            cart.map(item => <Cart key={item.id} item={item}></Cart>)
                        }
                        <div>
                            <button onClick={ChooseOne} className='d-block my-3 btn-style py-2 border-0'>Choose For Me</button>
                            <button onClick={DeleteAll} className='btn-style py-2 border-0'>Choose Again</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cards;