import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
const Shop = () => {
    const firstTenData = fakeData.slice(0,10)
    // useState()
    console.log(firstTenData)
    const [products,setProducts] = useState(firstTenData)
    return (
        <div>
            <h1>This is Shop</h1>
            <ul>
                {
                    products.map(product=><li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;