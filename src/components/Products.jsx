import React, { useState, useEffect } from 'react';
import {getProducts, getProductsByCategory} from '../services/apiService';
import ProductList from './products/ProductList';

function Products( props ){
    const [products, setProducts] = useState(false);
    const category = props.location.state;

    useEffect( () => {
        (async () => {
            if(category){
                let gettedProducts = await getProductsByCategory(category);
                setProducts(gettedProducts);
            }else{
                let gettedProducts = await getProducts();
                setProducts(gettedProducts);    
            }        
        })()
    }, [category]);

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