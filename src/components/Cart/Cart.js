import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total,prd)=>{
        return total + prd.price
    },0)
    
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered {cart.length}</p>
            <p>Total Price {totalPrice}</p>
        </div>
    );
};

export default Cart;