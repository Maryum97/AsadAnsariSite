import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import other components here
import Header from '../Header';

// import images here
import Logo1 from '../../assets/Business/RiskIntelLogo.png';
import Logo2 from '../../assets/Business/MayfairITConsultancyLogo.png';
import Logo3 from '../../assets/Business/AccrediNationLogo.png';

function Business() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 700 })
    }, []);

    return (
        <div className='container'>
            <Header heading='Business' />
            <br></br>
            <br></br>
            <p
                className='business-text'
                data-aos='zoom-in'
                data-aos-once="false"
                data-aos-delay='100'
            >
                Asad is the Founder and Managing Director of the following:
            </p>
            <div className='business-logos-grid'>
                {/* RiskIntel */}
                <div className='bus-grid-group'>
                    <div className='business-logo'>
                        <img
                            className='bus-logo img-fluid'
                            src={Logo1}
                            data-aos='zoom-in'
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-delay="-10"
                        >
                        </img>
                    </div>
                    <div
                        className='business-logo-description'
                        data-aos='fade-in'
                        data-aos-once="false"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-delay="50"
                    >
                        <div className='bus-logo-desc-container'>
                            <b>RiskIntel</b> is an organisation that utilises AI to protect client pain-points, whether related to business, reputational, finances, etc. from operational, cyber, and regulatory risks in order to gain competitive advantage.
                        </div>
                    </div>
                </div>
                {/* Mayfair */}
                <div className='bus-grid-group'>
                    <div className='business-logo'>
                        <img
                            className='bus-logo img-fluid'
                            src={Logo2}
                            data-aos='zoom-in'
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-delay="-10"
                        >
                        </img>
                    </div>
                    <div
                        className='business-logo-description'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay="50"
                    >
                        <div className='bus-logo-desc-container'>
                            <b>Mayfair IT Consultancy</b> is an organisation located within Birmingham, managed and directed by Asad himself. It allows for recruitment of IT experts and consultants for personal or business related ventures.
                        </div>
                    </div>
                </div>
                {/* AccrediNation */}
                <div className='bus-grid-group'>
                    <div className='business-logo'>
                        <img
                            className='bus-logo img-fluid'
                            src={Logo3}
                            data-aos='zoom-in'
                            data-aos-once="false"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-delay="-10"
                        >
                        </img>
                    </div>
                    <div
                        className='business-logo-description'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay="50"
                    >
                        <div className='bus-logo-desc-container'>
                            <b>AccrediNation</b> is an organisation that provides over a decade of experience in IT services, training, transformation, consulting, and outsourcing. It has worked and built strong relationships with several companies globally.
                        </div>
                    </div>
                </div>
            </div>
            {/* Grid ends here */}
            <br></br>
            <p
                className='business-text'
                data-aos='fade-in'
                data-aos-once="false"
                data-aos-delay='100'
            >
                By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.
            </p>
            <br></br>
            <br></br>
            <p
                className='business-text'
                data-aos='fade-in'
                data-aos-once="false"
                data-aos-delay='100'
            >
                Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.
            </p>
        </div>
    )
}

export default Business;
