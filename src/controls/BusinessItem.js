import React from 'react';
import './BusinessItem.css';

function BusinessItem(props) {
    return (
        <div className="businessitem-container">
            <img className="businessitem-logo" alt="logo of '{props.text}" src={props.logo}/>
            <p className="businessitem-content">{props.text}</p>
        </div>
    )
}

export default BusinessItem;