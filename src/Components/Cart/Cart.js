import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ cart, message, handleChooseAgain, handleChooseOne }) => {
    //  console.log({ cart, handleChooseAgain, handleChooseOne });
    return (
        <div className='cart'>
            <h3>Selected Items</h3>
            <h4>{message}</h4>
            {
                cart?.map(item => <CartItem  key={item.id} item={item}></CartItem>)
            }
            <button onClick={handleChooseOne} className='choose-one-btn'>Choose One</button>
            <button className='choose-again-btn' 
            onClick={handleChooseAgain}>Choose Again</button>

        </div>
    );
};

export default Cart;