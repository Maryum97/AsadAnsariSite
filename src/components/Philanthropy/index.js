import React from 'react';
import './style.css';

// import other components here
import Header from '../Header';
import PhilQuotation from './PhilQuotation';
import PhilItems from './PhilItems';

function Philanthropy() {
    return (
        <div className='container'>
            <Header heading='Philanthropy'/>
            <br></br>
            <PhilQuotation />
            <PhilItems />
        </div>
    )
}

export default Philanthropy;
