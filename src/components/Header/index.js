import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header(props) {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, []);

    return (
        <div className='section-header'>
            <h1
                className='heading'
                data-aos='slide-left'
                data-aos-once="false"
                data-aos-delay="100"
            >{props.heading}</h1>
        </div>
    )
}

export default Header;
