import React, { useEffect, useState } from 'react';
import { getOutstandingProducts } from '../services/apiService';
import ProductList from '../components/products/ProductList';

const Outstanding = () => {

    const [products, setProducts] = useState('');
    useEffect( () => {
        (async () => {
            const outstandingProducts = await getOutstandingProducts();
            setProducts(outstandingProducts);   
        })();
    }, [])
    return (
        <div>
            <h2 className="outstandingh2">🌟{'  '}Destacados{'  '}🌟</h2>
            <div className="container">
            {products ? (
                <ProductList products={products} />
            ):(
                <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
            )}
            </div>
            <hr></hr>
        </div>
    )
}

export default Outstanding;