import React, { useEffect } from 'react';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import QuotImg from '../../assets/Philanthropy/Screenshot_20210524-180312_Instagram.jpg';

function PhilQuotation() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, []);

    return (
        <div>
            Quotation here!
        </div>
    )
}

export default PhilQuotation;
