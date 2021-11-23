import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LinearProgress } from '@material-ui/core';
import ProductCard from './ProductCard';
import ProductHeaders from './ProductHeaders';

{/* Retrieve Product List from API */}

const Products = () => {
    {/* Initial value undefined */}
    const [products, setProducts] = useState();
    const pageTitle = "Products"

    {/* GET request to backend server. Runs once on page load */}
    useEffect(() => {
        axios.get(`http://localhost:5000/products`)
            .then((res) => {
                const responseProducts = res.data;
                setProducts(responseProducts);
            });
    }, []);

    {/* products now populated from database */}

    return (
        <section className="content-container">
            <h1>{pageTitle}</h1>

            {/* If products is undefined, show a loading animation */}

            <>{products ?
                (   
                    
                    <div className='productList content'>
                        <ProductHeaders />
                        {/* Pass each product to a ProductCard */}
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    
                )
                : <LinearProgress />} </>

        </section>
    );

};

export default Products;
