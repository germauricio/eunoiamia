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
            <h2 className="h1-info p-5">Destacados</h2>
            <div className="container">
            {products && (
                <ProductList products={products} />
            )}
            </div>
        </div>
    )
}

export default Outstanding;