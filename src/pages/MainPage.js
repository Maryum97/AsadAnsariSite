import React from 'react';

// import components here
import Navbar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import Business from '../components/Business';
import Philanthropy from '../components/Philanthropy';
import Awards from '../components/Awards';
import ContactLink from '../components/ContactLink';
import Footer from '../components/Footer';

function MainPage() {
    return (
        <div>
            <Navbar />
            <div id='page-top'></div>
            <br></br>
            <div id='about'>
                <PageIntro />
            </div>
            <br></br>
            <div id='business'>
                <Business />
            </div>
            <br></br>
            <div id='philanthropy'>
                <Philanthropy />
            </div>
            <br></br>
            <div id='awards'>
                <Awards />
            </div>
            <br></br>
            <ContactLink />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default MainPage;
