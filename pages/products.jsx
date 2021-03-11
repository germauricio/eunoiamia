import React, { useState, useEffect } from 'react';
import {getProducts} from '../services/apiService';
import ProductList from '../components/products/ProductList';

function Products(){
    const [products, setProducts] = useState(false);
    const [filter, setFilter] = useState('');
    const [filtrableProducts, setFiltrableProducts] = useState(false);

    const handleFilter = (e) => {
        e.preventDefault();
        const filteredProducts = filtrableProducts.filter(item => item.description.toLowerCase().includes(filter))

        setProducts(filteredProducts);
    }

    useEffect( () => {
        (async () => {
            let gettedProducts = await getProducts();
            setProducts(gettedProducts);
            setFiltrableProducts(gettedProducts);
        })()
    }, []);

    return(
        <div className="container">
            <div>
                <form 
                class="input-group"
                onSubmit={handleFilter}
                style={{zIndex: 0}}
                >
                    <input 
                    type="text" 
                    class="form-control"
                    placeholder="¡Sumate al cambio!"
                    onChange={e => setFilter(e.target.value)}/>
                    <div class="input-group-append mb-5"><button class="btn btn-primary">Buscar</button></div>
                </form>
            </div>
            <div className="container">

            { products ? (
                <div className="container">
                    <ProductList products={products} />
                </div>
            ) : (
                <div style={{minHeight: '65vh'}}>
                    <img src="/Rolling-1s-200px.gif" className="loading" alt="loading"/>
                </div>
                )}
            </div>
        </div>
    )
}

export default Products;