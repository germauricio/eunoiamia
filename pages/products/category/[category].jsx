

import React, { useState, useEffect } from 'react';
import {getProductsByCategory} from '../../../services/apiService';
import {useRouter} from 'next/router';
import ProductList from '../../../components/products/ProductList';


const Category = () => {
    const [products, setProducts] = useState(false);
    const router = useRouter()

    useEffect( () => {
        (async () => {
            if(router.query.category){
                let gettedProducts = await getProductsByCategory(router.query.category);
                setProducts(gettedProducts);
            }
        })()
    }, [router.query.category]);

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

export default Category;