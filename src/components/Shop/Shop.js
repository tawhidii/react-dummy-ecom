import React, { useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import fakeData from '../../fakeData'
const Shop = () => {
    const firstTenData = fakeData.slice(0,10)
    const [products,setProducts] = useState(firstTenData)
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product=><Product key={product.key} product={product}></Product>)
                }
            </div>
            <div  className="cart-container">
                    <h1> This is cart</h1>
            </div>
    
           
        </div>
    );
};

export default Shop;