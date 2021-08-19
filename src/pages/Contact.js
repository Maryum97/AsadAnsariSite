import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components here
import Footer from '../components/Footer';

function Contact() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, []);

    // define states here
    const [state, handleSubmit] = useForm("mrgrokav");

    if (state.succeeded) {
        return (
            <div className='thank-you-msg'>
                <h1>
                    Thank you for your message!
                </h1>
                <h2></h2>
                <h3></h3>
                <br></br>
                <h4>Asad will reach back to you soon :)</h4>
                <br></br>
                <h4>Click <a href='/'>here</a> to go back.</h4>
            </div>
        )
    }

    return (
        <div className='contact'>
            <div id='page-top'></div>
            <div className='contact-container'>
                <br></br>
                <a href='/#contact' className='back-to-main'><i className='fas fa-arrow-left'></i><span>  </span>Back To Main</a>
                <br></br>
                <br></br>
                <br></br>
                <h1
                    className='contact-header'
                    data-aos='flip-down'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='-10'
                >
                    Get in touch with me today!
                </h1>
                <div className='container contact-container'>
                    <div
                        className='card contact-card'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='200'
                    >
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className='form-group'>
                                <label className='contact-label' htmlFor="firstName">First Name:</label>
                                <br></br>
                                <input
                                    className='contact-input'
                                    id='firstName'
                                    type='text'
                                    name='firstName'
                                    required
                                ></input>
                                <ValidationError
                                    prefix="First Name"
                                    field="firstName"
                                    errors={state.errors}
                                />
                                <br></br>
                                <label className='contact-label' htmlFor="lastName">Last Name:</label>
                                <br></br>
                                <input
                                    className='contact-input'
                                    id='lastName'
                                    type='text'
                                    name='lastName'
                                    required
                                ></input>
                                <ValidationError
                                    prefix="Last Name"
                                    field="lastName"
                                    errors={state.errors}
                                />
                                <br></br>
                                <label className='contact-label' htmlFor="email">Email Address:</label>
                                <br></br>
                                <input
                                    className='contact-input'
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                ></input>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <br></br>
                                <label className='contact-label' htmlFor="message">Message:</label>
                                <br></br>
                                <textarea
                                    className='contact-textarea'
                                    id="message"
                                    type="text"
                                    name="message"
                                    required
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <br></br>
                                <button className='btn submit-btn btn-success' type='submit' disabled={state.submitting}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
