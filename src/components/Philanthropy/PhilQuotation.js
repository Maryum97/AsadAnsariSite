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
        <div className='quotation-container'>
            <div className='quotation-grid'>
                <div className='quot-img'>
                    <img
                        src={QuotImg}
                        className='img-fluid quot-image'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='200'
                    ></img>
                </div>
                <div
                    className='quot-text'
                    data-aos='zoom-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='300'
                >
                    <p className='quotation'>
                        “Philanthropy is a huge part of my life. It fills a gap for me. The more I help others, the more it pays off personally. In a small way, I’m trying to help make a lasting impact in others’ lives. All the initiatives I’m working on with trustable charities in different sectors, help me do that."
                    </p>
                    <br></br>
                    <p className='quotation'>
                        ~ Asad Ansari
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PhilQuotation;
