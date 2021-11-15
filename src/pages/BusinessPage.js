import React from 'react';
import BusinessItem from '../controls/BusinessItem';
import './BusinessPage.css';

import logo_riskintel from '../assets/logo_riskintel.png';
import logo_mayfairit from '../assets/logo_mayfairit.png';
import logo_accredination from '../assets/logo_accredination.png';

function BusinessPage() {
    return (
        <div className="businesspage-container">
            <div className="businesspage-title-wrapper" class="box">
                <h1 className="businesspage-title">BUSINESS</h1>
            </div>
            <div className="businesspage-content" class="box">
                <BusinessItem logo={logo_riskintel} text="RiskIntel is an organisation that utilises AI to protect client pain-points, 
                whether related to business, reputational, finances, etc. from operational, cyber, and regulatory risks in order to gain 
                competitive advantage."/>
                <BusinessItem logo={logo_mayfairit} text="Mayfair IT Consultancy is an organisation located within Birmingham, 
                 and directed by Asad himself. It allows for recruitment of IT experts and consultants for personal or business related ventures."/>
                <BusinessItem logo={logo_accredination} text="AccrediNation is an organisation that provides 
                over a decade of experience in IT services, training, 
                transformation, consulting, and outsourcing. It has worked and built strong relationships with several companies globally."/>
            </div>
        </div>
    )
}

export default BusinessPage;