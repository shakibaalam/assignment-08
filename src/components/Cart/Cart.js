import React from 'react';

const Cart = ({ item }) => {
    console.log(item);
    return (
        <div className="card mb-3  style">
            <div className="row g-5">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;