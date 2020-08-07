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
        { products && (
            <ProductCard products={products} />
        )}
        </div>
    )
}

export default Products;