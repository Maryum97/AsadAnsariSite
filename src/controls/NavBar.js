import React from 'react';
import './NavBar.css';

import NavBarItem from './NavBarItem';

import asadImage from '../assets/asad_ansari_white.png'

function NavBar() {
    return (
        <div className="navbar-container">
            <img className="navbar-logo" alt="logo of Asad Ansari" src={asadImage}/>
            <div className="navbar-menu-wrapper">
            <div className="navbar-menu">
                <NavBarItem text="ABOUT"/>
                <NavBarItem text="BUSINESS"/>
                <NavBarItem text="NON-PROFIT"/>
                <button className="nonprofit-contact"><a href="mailto:mail@example.com">CONTACT ME</a> </button>
            </div>
            </div>
        </div>
    )
}

export default NavBar;