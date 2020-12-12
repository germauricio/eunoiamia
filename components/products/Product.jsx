import React, { useContext, useState, useCallback } from 'react';
import Link from '../Link';
import { CartContext } from '../../services/cartContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Product = ({product}) => {
    const {cartProvider} = useContext(CartContext); 
    const [cart, setCart] = cartProvider;
    const [outOfStock, setOutOfStock] = useState(false);

    var inCart = cart.find(item => item.id == product.id);
    var quantity = inCart ? inCart.quantity : 0;

    const addToCart = () => {
        const cartProduct = cart.find(item => item.id == product.id);
        if(cartProduct && quantity + 1 > cartProduct.stock) {
            setOutOfStock(true);
        }
        else {

            if(cartProduct){
                cartProduct.quantity += 1;
                setCart(cart.filter((item) => item.id !== product.id ));
                setCart(curr => [...curr, cartProduct]);
            }
            else{
            const currProduct = {
                description: product.description,
                price: product.price,
                quantity: 1,
                image: product.image,
                id: product.id,
                stock: product.stock,
                name: product.name,
                cost: product.cost
            }
                setCart(curr => [...curr, currProduct]);
            }
        }
    }
    console.log(`${product.image}-1.jpg`)
    return(
        <div class="product-card">
            <Link 
                path={`/products/name/${product.name}`} 
                title={
                    <div class="product-tumb">
                    <LazyLoadImage
                    src={`${product.image}-1.jpg`} 
                    alt={product.name} 
                    />
                </div>} 
                linkClass= "product-a"
            />
            <div className="product-details">
                <h4><Link path={`/products/name/${product.name}`} linkClass = "product-a" title={product.description}></Link></h4>
                <div className="product-bottom-details">
                    <div className="product-price">${product.price}</div>
                    <div className="product-links">
                        {product.stock < 1 ? 
                            (
                                <em>Sin stock</em>
                            ) : 
                            (
                                <button className="addcart" onClick={ (product) => addToCart(product)}>
                                { quantity > 0 && (
                                    quantity
                                )}
                                <LazyLoadImage 
                                src="/shop.ico" 
                                height="30px" 
                                alt="carrito"
                                effect="blur"
                                />
                            </button>
                            )
                        }
                    </div>
                    {outOfStock && (
                        <p class="text-danger">Solo tenemos {product.stock} disponibles!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Product;