import React from 'react';

import NavBar from '../controls/NavBar.js'
import AboutPage from '../pages/AboutPage.js'
import BusinessPage from './BusinessPage.js';
import NonprofitPage from './NonprofitPage.js';


function MainPage() {
    return (
        <div className="mainpage-container">
            <NavBar className="navbar"/>
            <AboutPage className="aboutpage"/>
            <BusinessPage className="businesspage"/>
            <NonprofitPage className="nonprofitpage"/>
        </div>
    )
}

export default MainPage;