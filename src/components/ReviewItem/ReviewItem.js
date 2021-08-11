import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product
     return (
        <div>
            <h4 className="product-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <p><small>Price {price}</small></p>
            <br />
            <button className='cart-button' onClick={()=>props.handleProductRemove(key)}>Remove</button>
        </div>
    );
};  

export default ReviewItem;