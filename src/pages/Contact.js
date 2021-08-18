import React from 'react';
import './style.css';

// import components here
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className='contact'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className='contact-header'>Get in touch with me today!</h1>
            <div className='container contact-container'>
                <div className='card contact-card'>
                    <form>
                        <div className='form-group'>
                            <label className='contact-label'>First Name:</label>
                            <br></br>
                            <input
                                className='contact-input'
                            ></input>
                            <br></br>
                            <label className='contact-label'>Last Name:</label>
                            <br></br>
                            <input
                                className='contact-input'
                            ></input>
                            <br></br>
                            <label className='contact-label'>Email Address:</label>
                            <br></br>
                            <input
                                className='contact-input'
                            ></input>
                            <br></br>
                            <label className='contact-label'>Message:</label>
                            <br></br>
                            <textarea
                                className='contact-textarea'
                            ></textarea>
                            <br></br>
                            <button className='btn submit-btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default Contact;
