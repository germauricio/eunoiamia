

import React, { useState, useEffect } from 'react';
import {getProductsByCategory} from '../../services/apiService';
import {useRouter} from 'next/router';
import ProductList from '../../components/products/ProductList';


const Category = () => {
    const [products, setProducts] = useState(false);
    const router = useRouter();

    useEffect( () => {
        (async () => {
            if(router.query.category){
                let gettedProducts = await getProductsByCategory(router.query.category);
                setProducts(gettedProducts);
            }
        })()
    }, [router.query.category]);

    var transformedCategory = '';

    if(router.query.category){
        transformedCategory = router.query.category.replaceAll("-", " ");
    }

    return(
        <div>
            <div className="pb-3 w-100">
                <h2 style={{color: "grey"}}>🌻 {transformedCategory.charAt(0).toUpperCase() + transformedCategory.slice(1)} 🌻</h2>
            </div>
            <div className="container">
            { products ? (
                <ProductList products={products} />
                ) : (
                    <div>
                        <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category;