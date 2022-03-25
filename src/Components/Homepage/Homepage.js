import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Homepage.css'

const Homepage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className='homepage-container'>
            <div className='all-products-container'>
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Homepage;