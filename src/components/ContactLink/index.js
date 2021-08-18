import React from 'react';
import './style.css';

function ContactLink() {
    return (
        <div className='contact-link'>
            <div className='card contact-link-card border border-primary'>
                <h1>
                    To get in touch with Asad, click here:
                </h1>
                <br></br>
                <a href='/contact'>
                    <button className='btn send-msg-btn btn-primary'>Send Asad a Message</button>
                </a>
            </div>
        </div>
    )
}

export default ContactLink;
