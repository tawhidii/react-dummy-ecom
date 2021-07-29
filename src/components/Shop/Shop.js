import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Products/Product';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const firstTenData = fakeData.slice(0,10)
    const [products] = useState(firstTenData)
    const [cart,setCart] = useState([])

    
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

    const handleAddProduct = (product) =>{
        const productToBeaddedKey = product.key
        const sameProduct = cart.find(pd=>pd.key===productToBeaddedKey)
        let count = 1
        let newCart;
        if(sameProduct){
            const count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd=>pd.key !== productToBeaddedKey)
            newCart = [...others,sameProduct]
        }else{
            product.quantity = 1
            newCart = [...cart,product]
       
        }
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
                <Cart cart={cart}>
                <Link to="/review"><button className="cart-button">Reveiw order</button></Link>
                </Cart>
            </div>
    
           
        </div>
    );
};

export default Shop;