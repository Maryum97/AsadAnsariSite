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
        Aos.init({ duration: 800 })
    }, []);

    return (
        <div className='phil-items-grid'>
            {/* 6 cards */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo1}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo2}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo3}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo4}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo5}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
            {/* One card starts here */}
            <div className='phil-item-card'>
                <div className='phil-item-container'>
                    <div
                        className='phil-logo'
                    >
                        <img
                            src={Logo6}
                            className='img-fluid'
                        ></img>
                    </div>
                    <div className='phil-logo-description'></div>
                </div>
            </div>
            {/* Card ends here */}
        </div>
    )
}

export default PhilItems;
