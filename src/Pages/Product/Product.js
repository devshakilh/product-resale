import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://product-seller-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <div>
                <p className='text-4xl py-4 text-center font-bold '>Our Product</p>
            </div>
            <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 lg:pl-12'>

                {
                    product.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;