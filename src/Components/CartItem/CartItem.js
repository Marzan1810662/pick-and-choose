import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css'

const CartItem = ({item, handleDeleteFromCart}) => {
    const {image, name} = item;
    // console.log(handleDeleteFromCart);
    return (
        
            <div className='cart-item'>
                <img src={image} alt="" />
                <p>{name}</p>
                <button onClick={() => handleDeleteFromCart(item)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
        
    );
};

export default CartItem;