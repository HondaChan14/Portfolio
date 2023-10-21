import React, { useState } from 'react';
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti';
import './navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false)
    };

    return (
        <>
            <nav className="nav-styles">
                <button className="nav-button-styles" onClick={handleMenuToggle}>
                {isOpen ? <TiThMenuOutline className='icon-open'/> : <TiThMenu  className='icon-closed'/>}
                </button>
                <button className='theme'></button>
            </nav>

            <div
                className={`menu-items-styles ${isOpen ? 'open' : 'closed'}`}
            >
                <span className="menu-header">Jason Jugo</span>
                <a className="menu-bar" href="#projects" onClick={handleLinkClick}>
                Projects
                </a>
                <a className="menu-bar" href="#experience" onClick={handleLinkClick}>
                Experience
                </a>
                <a className="menu-bar" href="#contact" onClick={handleLinkClick}>
                Contact
                </a>
            </div>
        </>
    );
};

export default Navbar;

