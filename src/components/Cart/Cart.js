import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({ item }) => {
    return (
        <div className="card mb-3 style">
            <div className="row g-4">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='d-flex justify-content-center align-items-center'>
                            <h5 className="card-title item">{item.name}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;