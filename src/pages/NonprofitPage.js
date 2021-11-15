import React from 'react';
import './NonprofitPage.css';

import NonprofitItem from '../controls/NonprofitItem.js'

import logo_bat from '../assets/logo_british_asian_trust.png';
import logo_afmf from '../assets/logo_afmf.png';
import logo_glt from '../assets/logo_glt.png';
import logo_cbh from '../assets/logo_cbh.png';
import logo_islam_channel from '../assets/logo_islam_channel.png';
import logo_deloitte from '../assets/logo_deloitte.png';

function Nonprofit() {
    return (
        <div className="nonprofit-container">
            <div className="nonprofit-intro">
                <div className="nonprofit-title-wrapper" class="box">
                    <h1 className="nonprofit-title">NON-PROFIT</h1>
                </div>
                <div className="nonprofit-quote-wrapper" class="box">
                    <p className="nonprofit-quote">“Philanthropy is a huge part of my life. It fills a gap for me. 
                        The more I help others, the more it pays off personally. 
                        In a small way, I’m trying to help make a lasting impact in others’ lives. 
                        All the initiatives I’m working on with trustable charities in different sectors, help me do that."</p>
                </div>
            </div>
            <div className="grid-container">
                <NonprofitItem class="grid-item" logo={logo_bat} text="From 2018, Asad has supported the British Asian Trust 
                on their mental health projects throughout Pakistan (Asad’s main focus), India and Bangladesh."/>

                <NonprofitItem class="grid-item" logo={logo_afmf} text="Asad has provided advice on diversity-related issues to 
                the Ministry of Defense, working to raise awareness for the Army within the Professional Services sector and The City."/>

                <NonprofitItem class="grid-item" logo={logo_glt} text="From 2017, Asad has volunteered to raise funding for the Graham 
                Layton Trust in partnership with LRBT, providing hospitals and clinics in Pakistan free eye care for all citizens."/>

                <NonprofitItem class="grid-item" logo={logo_cbh} text="A former member and current brand ambassador, Asad has been 
                helping to end white collar crime within the Hajj and Umrah travel sector."/>

                <NonprofitItem class="grid-item" logo={logo_islam_channel} text="In 2019, Asad had a TV appearance on the talk show Living 
                the Life on Islamn Channel, talking about spirituality and faith."/>

                <NonprofitItem class="grid-item" logo={logo_deloitte} text="Asad has provided educational initiatives such as diversity and 
                inclusion networks, delivering profile building and connecting corporate companies in the UK."/>
            </div>
        </div>
    )
}

export default Nonprofit;