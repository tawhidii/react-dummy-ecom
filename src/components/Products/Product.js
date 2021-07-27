import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {name,img,price,seller,stock,key} = props.product
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p> <small>by {seller}</small></p>
                <p>{price}$</p>
                <p><small>In stock: {stock} </small></p>
            {props.showAddtoCart && <button className="cart-button" onClick={()=>props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingBasket}>
                    </FontAwesomeIcon> Add to cart</button>}
            </div>
        </div>
    );
};

export default Product;