import React from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import "../DarkMode/DarkMode.css"


const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

    const toggleTheme = (event) => {
        if(event.target.checked) setDarkMode();
        else setLightMode();
    }
    return (
        <div className="dark_mode">
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <BsSun className="sun"/>
                <BsMoonStars className="moon"/>
            </label>
        </div>
    );
};

export default DarkMode;