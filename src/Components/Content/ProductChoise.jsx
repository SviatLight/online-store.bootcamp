import React from "react";
import './ProductChoise.css';
import ProductCard from './ProductCard.jsx';

const ProductChoise = () => {
    return (
        <div className="productChoise__wrapper">
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <ProductCard />
        </div>
    )
}

export default ProductChoise;