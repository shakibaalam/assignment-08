import React from 'react';

const Cart = ({ item }) => {
    console.log(item);
    return (
        <div className='p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img className='w-25' src={item.img} alt="" />
                </div>
                <div className='col-6'>
                    <h5>{item.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;