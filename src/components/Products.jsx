import React, { useState, useEffect } from 'react';
import getProducts from '../services/apiService';
import ProductCard from './products/ProductCard';

function Products(){
    const [products, setProducts] = useState(false);

    useEffect(() => {
        (async () => {        
            const gettedProducts = await getProducts();
            setProducts(gettedProducts);
        })()
      }, []);

    return(
        <div className="container">
        { products ? (
            <ProductCard products={products} />
        ) : (
            <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
        )}
        </div>
    )
}

export default Products;