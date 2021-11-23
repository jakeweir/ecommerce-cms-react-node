import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LinearProgress } from '@material-ui/core';

const SingleProduct = (props) => {

    const { id } = useParams();

    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                const responseInfo = res.data;
                setProductInfo(responseInfo);
            });
    }, []);

    

    return (
        <>{productInfo ?
            (
                <section className="content-container">
                    <h1>{`${productInfo.title}`}</h1>
                    <div className="content">
                        <p>{`product id =  ${id} `}</p>
                    </div>
                </section>
            )

            : <LinearProgress color="secondary"/>} </>
    )
}

export default SingleProduct;
