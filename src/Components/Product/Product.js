import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const {image, name, price} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}BDT</p>
        </div>
    );
};

export default Product;