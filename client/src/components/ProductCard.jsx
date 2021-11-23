import React from 'react';
import { useHistory } from 'react-router-dom';
import placeholder from '../assets/uploads/placeholder.jpg';

const ProductCard = (props) => {

    {/* retreive product details from productList */}
    const { product } = props;
    
    {/* destructure elements that make up a product to use in return */}
    const { id, title, salesPrice, sku, category, stock, published  } = product;

    let history = useHistory();

    return (
        /* product-card links to SingleProduct  */
        <div className="product-card" onClick={() => history.push(`/product/${id}`)}>
            <div className="img-container">
                <img src={placeholder} className="placeholder-img"/>
            </div>
            <div className="flex-column-main">
                <h4>{title}</h4>
                <p><span className="cat">in {category}</span></p>
            </div>
            <div className="flex-column">
                <p>{sku}</p>
            </div>
            <div className="flex-column">
                <p>{stock}</p>
            </div>
            <div className="flex-column">
                <p>{salesPrice}</p>
            </div>
            <div className="flex-column">
                <p>{published}</p>
            </div>

        </div>
    );
};

export default ProductCard;
