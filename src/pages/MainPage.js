import React from 'react';

// import components here
import Navbar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
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
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
            <h1>Hi, this is the main page!</h1>
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
