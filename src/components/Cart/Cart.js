import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total,prd)=>{
        return total + prd.price
    },0)
    let shippingCost = 0
    if(totalPrice>15){
        shippingCost = 4.40
    }else if(totalPrice>50){
        shippingCost = 0
    }
    let grandTotal = (shippingCost + totalPrice).toFixed(2)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered {cart.length}</p>
            <p>Items: {totalPrice.toFixed(2)}</p>
            <p>Shipping Cost:{shippingCost}</p>
            <p>Total:{grandTotal}</p>

        </div>
    );
};

export default Cart;