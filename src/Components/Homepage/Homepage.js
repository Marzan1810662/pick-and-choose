import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Homepage.css'

const Homepage = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const handleSelectProduct = (selectedProduct) => {
        console.log('handle select product clicked with id', selectedProduct.id);
        let selectedProducts =[];
        if(cart.length === 0){
            selectedProducts.push(selectedProduct);
        }
        else{
            selectedProducts = [...cart, selectedProduct]
        }
        // console.log(cart);
        setCart(selectedProducts);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Homepage;