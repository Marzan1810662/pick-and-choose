import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h3>Selected Items</h3>
            {
                cart.map(item =><h4>{item.name}</h4>)
                // cart.map(item => {
                //     <div className='cart-item'>
                //         <img src={item.image} alt="" />
                //         <p>{item.name}</p>
                //         <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                //     </div>
                // })
            }
            <button className='choose-one-btn'>Choose One</button>
            <button className='choose-again-btn'>Choose Again</button>

        </div>
    );
};

export default Cart;