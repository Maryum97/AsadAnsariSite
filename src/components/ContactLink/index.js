import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

function ContactLink() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 700 })
    }, []);

    return (
        <div className='contact-link'>
            <div className='contact-link-card'>
                <h1>
                    To get in touch with Asad, click below:
                </h1>
                <br></br>
                <a href='/contact'>
                    <button
                        className='btn send-msg-btn btn-primary'
                        data-aos='zoom-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay="100"
                    >
                        Send Asad a Message
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ContactLink;
