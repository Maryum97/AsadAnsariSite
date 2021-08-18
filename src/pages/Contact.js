import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style.css';

// import components here
import Footer from '../components/Footer';

function Contact() {
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
        <div>
            <div id='page-top'></div>
            <div className='contact'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='contact-header'>Get in touch with me today!</h1>
                <div className='container contact-container'>
                    <div className='card contact-card'>
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
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <br></br>
                                <button className='btn submit-btn btn-primary' type='submit' disabled={state.submitting}>Submit</button>
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
        </div>
    )
}

export default Contact;
