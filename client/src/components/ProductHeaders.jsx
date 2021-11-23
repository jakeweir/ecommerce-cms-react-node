import React from 'react';

const ProductHeaders = () => {

    return (
        /* product-card links to SingleProduct  */
        <div className="product-headers">
            <div className="img-container">
                <h4>Img</h4>
            </div>
            <div className="flex-column-main">
                <h4>Title</h4>
            </div>
            <div className="flex-column">
                <h4>SKU</h4>
            </div>
            <div className="flex-column">
                <h4>Stock Qty</h4>
            </div>
            <div className="flex-column">
                <h4>Price</h4>
            </div>
            <div className="flex-column">
                <h4>Published?</h4>
            </div>
        </div>
    );
};

export default ProductHeaders;