import React from "react";
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className="product__wrapper">
            <div className="test">
            <div className="product__photo">
                <img src="" alt="" />
            </div>
            <div className="product-rate-price">
                <div className="product__rate">
                    <span>RATE</span>
                </div>
                <div className="product__price">
                    <span>PRICE</span>
                </div>
            </div>
            <div className="product__description">
                <p></p>
            </div>
            <div className="product__category">
                <p></p>
            </div>
            <div className="product__add-btn">
                <a href="#">add to card</a>
            </div>
            </div>
        </div>
    )
}

export default ProductCard;