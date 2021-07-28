import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity} = props.product
     return (
        <div>
            <h4 className="product-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <br />
            <button className='cart-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;