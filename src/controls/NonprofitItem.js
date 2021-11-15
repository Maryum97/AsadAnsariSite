import React from 'react';
import './NonprofitItem.css';

function NonprofitItem(props) {
    return (
        <div className="nonprofititem-container">
            <img className="nonprofititem-logo" alt="logo of '{props.text}" src={props.logo}/>
            <p className="nonprofititem-content">{props.text}</p>
        </div>
    )
}

export default NonprofitItem;