import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import okImage from '../../images/source.gif'
import { useHistory } from 'react-router-dom';
const Review = () => {
    const [cart,setCart] = useState([])
    const [orderPlaced,setOrderPlaced] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)
        const cartProducts = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.key === key)
            product.quantity = savedCart[key]
            return product
        })

        setCart(cartProducts)

    },[])
    const okImageShow = <img src={okImage} alt="" />
    
    const handleProductRemove = (productKey) =>{
        const newCart = cart.filter(pd=>pd.key!==productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }
    const handleProceedOrder = ()=>{
        // setCart([])
        // setOrderPlaced(true)
        // processOrder()
        history.push('/shipment')
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {   
                cart.map(pd=><ReviewItem 
                    product={pd} key={pd.key} 
                    handleProductRemove={handleProductRemove}></ReviewItem>)
            }
            {
                orderPlaced && okImageShow
            }
            </div>
            <div>
            <Cart cart={cart}>
                <button className="cart-button" onClick={handleProceedOrder}>Proceed Checkout</button>
            </Cart>
            </div>
        </div>
    );
};

export default Review;