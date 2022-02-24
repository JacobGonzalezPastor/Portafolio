import React from 'react';
import "../Styles/Header.css"
const Header = ({ isScrolling }) => {

    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='navbar-logo' onClick={toTheTop}>
                Jacob Gonzalez
            </div>
        </nav>
    )
};

export default Header;
