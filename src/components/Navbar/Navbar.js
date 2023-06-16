import React, { useState } from 'react';
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti';
import './navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navStyles">
                <button className="navButtonStyles" onClick={handleMenuToggle}>
                {isOpen ? <TiThMenuOutline /> : <TiThMenu />}
                </button>
            </nav>

            <div
                className={`menuItemsStyles ${isOpen ? 'open' : 'closed'}`}
            >
                <span className="menuHeader">Jason Jugo</span>
                <a className="menuBar" href="#projects">
                Projects
                </a>
                <a className="menuBar" href="#experience">
                Experience
                </a>
                <a className="menuBar" href="#contact">
                Contact
                </a>
            </div>
        </>
    );
};

export default Navbar;

