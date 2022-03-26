import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Homepage.css'

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const handleSelectProduct = (selectedProduct) => {
        let selectedProducts = [];

        if (cart.length === 0) {
            selectedProducts.push(selectedProduct);
        }
        else {
            if (cart.length === 4) {
                swal({
                    text: "Sorry! Can not add more than 4 products",
                    icon: "error",
                    button: "OK",
                });
                selectedProducts = [...cart];
            }
            else {
                const exists = cart.find(product => product.id === selectedProduct.id);
                if (exists) {
                    swal({
                        text: "Product already added to cart",
                        icon: "error",
                        button: "OK",
                    });
                    selectedProducts = [...cart];
                }
                else {
                    selectedProducts = [...cart, selectedProduct]
                }

            }
        }
        setCart(selectedProducts);
        setMessage('');
    }
    //select 1 product randomly from cart
    const handleChooseOne = () => {
        // console.log('Items in cart', cart.length);
        if (cart.length > 0) {
            const index = Math.floor(Math.random() * cart.length);
            // console.log("Random Number", index);
            // console.log(cart[index]);
            setCart([cart[index]]);
            setMessage('The one picked for you is ')
        }
        else{
            swal({
                text: "Please select products first.",
                icon: "error",
                button: "OK",
            });
        }
    }
    //emtpty cart
    const handleChooseAgain = () => {
        setCart([]);
        setMessage('')
    }
    return (
        <div className='homepage-container'>
            <div className='all-products-container'>
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleSelectProduct={handleSelectProduct}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} message={message} handleChooseAgain={handleChooseAgain} handleChooseOne={handleChooseOne} ></Cart>
            </div>
        </div>
    );
};

export default Homepage;