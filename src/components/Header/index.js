import React from 'react';
import './style.css';

function Header(props) {
    return (
        <div className='section-header'>
            <h1 className='heading'>{props.heading}</h1>
        </div>
    )
}

export default Header;
