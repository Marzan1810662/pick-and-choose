import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = ({item}) => {
    const {image, name, price} = item;
    return (
        
            <div className='cart-item'>
                <img src={image} alt="" />
                <p>{name}</p>
                <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
        
    );
};

export default CartItem;