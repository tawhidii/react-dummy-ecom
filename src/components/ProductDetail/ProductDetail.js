import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetail = () => {
    const {productkey} = useParams()
    const product = fakeData.find(pd=>pd.key===productkey)
    console.log(product)
    return (
        <div>
            <h1>Product Details </h1>
            <Product product={product} showAddtoCart={false}></Product>
        </div>
    );
};

export default ProductDetail;