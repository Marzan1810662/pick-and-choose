import {  faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product, handleSelectProduct}) => {
    const {image, name, price} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}BDT</p>
            <button onClick={() => handleSelectProduct(product)}>Select <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;