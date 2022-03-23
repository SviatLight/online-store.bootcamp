import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">
                <h1>Online Store</h1>
            </div>
            <div className="header__btn-cart">
                <a href="#" className="btn-cart">cart</a>
            </div>
        </header>
    )
}

export default Header;