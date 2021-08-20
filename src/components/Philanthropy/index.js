import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import other components here
import Header from '../Header';
import PhilQuotation from './PhilQuotation';
import PhilItems from './PhilItems';

function Philanthropy() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, []);

    return (
        <div className='container'>
            <Header heading='Philanthropy' />
            <br></br>
            <PhilQuotation />
            <br></br>
            <div
                className='phil-text-container'
                data-aos='zoom-in'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay='300'
            >
                <div className='phil-text'>
                    One of Asad's philanthropic highlights include him being the Freeman for the City of London.
                </div>
            </div>
            <br></br>
            <p
                className='philanthropy-text'
                data-aos='fade-in'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay='200'
            >
                His other philanthropic works include the following:
            </p>
            <br></br>
            <br></br>
            <br></br>
            <PhilItems />
        </div>
    )
}

export default Philanthropy;
