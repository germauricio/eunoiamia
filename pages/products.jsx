import React, { useState, useEffect } from 'react';
import {getProducts, getProductsByCategory} from '../services/apiService';
import ProductList from '../components/products/ProductList';

function Products(){
    const [products, setProducts] = useState(false);

    useEffect( () => {
        (async () => {
            let gettedProducts = await getProducts();
            setProducts(gettedProducts);       
        })()
    }, []);

    return(
        <div className="container">
        { products ? (
            <ProductList products={products} />
        ) : (
            <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
        )}
        </div>
    )
}

export default Products;