import React from "react";
import './MainContent.css';
import Setings from "./Content/Setings";
import ProductChoise from "./Content/ProductChoise";

const MainContent = () => {
    return (
        <div className="content__wrapper">
            <div className="content__setings">
                <Setings />
            </div>
            <div className="content__productChoise">
                <ProductChoise />
            </div>
        </div>
    )
}

export default MainContent;