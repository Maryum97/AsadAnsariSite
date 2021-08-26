import React, { useEffect } from 'react';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import Logo1 from '../../assets/Philanthropy/Phil-Logos/Logo1.png';
import Logo2 from '../../assets/Philanthropy/Phil-Logos/Logo2.png';
import Logo3 from '../../assets/Philanthropy/Phil-Logos/Logo3.png';
import Logo4 from '../../assets/Philanthropy/Phil-Logos/Logo4.png';
import Logo5 from '../../assets/Philanthropy/Phil-Logos/Logo5.png';
import Logo6 from '../../assets/Philanthropy/Phil-Logos/Logo6.png';

function PhilItems() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, []);

    return (
        <div className='phil-items-container'>
            <div className='phil-items-grid'>
                {/* 6 cards */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='-10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo1}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                British Asian Trust Mental Health Association
                            </h3>
                            <p className='phil-logo-text'>
                                From 2018, Asad has supported the British Asian Trust on their mental health projects throughout Pakistan (Asad’s main focus), India and Bangladesh.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
                {/* <div className='phil-item-card-empty'></div>
                <div className='phil-item-card-empty'></div> */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    // id='card-grid-adj'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo2}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                Armed Forces Muslim Forum
                            </h3>
                            <p className='phil-logo-text'>
                                Asad has provided advice on diversity-related issues to the Ministry of Defense, working to raise awareness for the Army within the Professional Services sector and The City.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo3}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                Graham Layton Trust (LRBT)
                            </h3>
                            <p className='phil-logo-text'>
                                From 2017, Asad has volunteered to raise funding for the Graham Layton Trust in partnership with LRBT, providing hospitals and clinics in Pakistan free eye care for all citizens.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
                {/* <div className='phil-item-card-empty'></div>
                <div className='phil-item-card-empty'></div> */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    // id='card-grid-adj'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo4}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                Council of British Hajjis UK
                            </h3>
                            <p className='phil-logo-text'>
                                A former member and current brand ambassador, Asad has been helping to end white collar crime within the Hajj and Umrah travel sector.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo5}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                Living the Life TV Appearance
                            </h3>
                            <p className='phil-logo-text'>
                                In 2019, Asad had a TV appearance on the talk show Living the Life on Islamn Channel, talking about spirituality and faith.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
                {/* <div className='phil-item-card-empty'></div>
                <div className='phil-item-card-empty'></div> */}
                {/* One card starts here */}
                <div
                    className='phil-item-card'
                    // id='card-grid-adj'
                    data-aos='fade-in'
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-delay='10'
                >
                    <div className='phil-item-container'>
                        <div
                            className='phil-logo'
                        >
                            <img
                                src={Logo6}
                                className='img-fluid phil-item-logo'
                            ></img>
                        </div>
                        <div className='phil-logo-description'>
                            <h3 className='phil-logo-title'>
                                Deloits Muslim Network
                            </h3>
                            <p className='phil-logo-text'>
                                Asad has provided educational initiatives such as diversity and inclusion networks, delivering profile building and connecting corporate companies in the UK.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card ends here */}
            </div>
        </div>
    )
}

export default PhilItems;
