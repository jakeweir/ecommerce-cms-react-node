import React from 'react';

const SingleProductCard = (props) => {

    {/* retreive product details from productList */}
    const { product } = props;
    
    {/* destructure elements that make up a product to use in return */}
    const { id, title, salesPrice, sku, category, stock, published  } = product;



};

export default SingleProductCard;