import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    return (
        <div className='cart'>
            <h3>Selected Items</h3>
            {
                cart.map(item => <CartItem  key={item.id} item={item}></CartItem>)
            }
            <button className='choose-one-btn'>Choose One</button>
            <button className='choose-again-btn'>Choose Again</button>

        </div>
    );
};

export default Cart;