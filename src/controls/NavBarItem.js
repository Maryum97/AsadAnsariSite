import React from 'react';

import './NavBarItem.css';

function navBarItem(props) {
    return (
        <div className="navbaritem-container">
            <h1 className="navbaritem-text">{props.text}</h1>
        </div>
    )
}

export default navBarItem;