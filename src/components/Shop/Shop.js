import React, { useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const firstTenData = fakeData.slice(0,10)
    const [products] = useState(firstTenData)
    const [cart,setCart] = useState([])

    const handleAddProduct = (product) =>{
        const newCart = [...cart,product]
        const sameProduct = newCart.filter(pd=>pd.key===product.key)
        let count = sameProduct.length
        console.log(count)
        setCart(newCart)
        addToDatabaseCart(product.key,count)
        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product=><Product key={product.key}
                         product={product} 
                         handleAddProduct={handleAddProduct} showAddtoCart={true}></Product>)
                }
            </div>
            <div  className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
    
           
        </div>
    );
};

export default Shop;