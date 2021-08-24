import React, { useEffect } from 'react';
import './style.css';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import other components here
import Header from '../Header';

// import images here
import AwardImg from '../../assets/Awards/Top100AsianStarsInUKTech.png';

function Awards() {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, []);

    return (
        <div className='container'>
            <Header heading='Awards' />
            <br></br>
            <div className='awards-container'>
                <div className='award-image-cont'>
                    <img
                        src={AwardImg}
                        className='img-fluid awards-img'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='100'
                    ></img>
                </div>
                <div className='awards-text'>
                    <h3
                        className='awards-heading'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='100'
                    >
                        Asians In Tech Award 2020
                    </h3>
                    <p
                        className='awards-para'
                        data-aos='fade-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay='100'
                    >
                        Asad has received the Top 100 Asians Stars In UK Tech Award 2020 for his work in the risk and regulatory sector, which delivers a suite of flexible services that assist clients with assessments, reviews, deep dives, and forecasts. Most notably having delivered projects and developed business across digital technology, change, regulatory, risk, governance and IT projects across a range of FTSE 100 clients within Enterprise Software, AIM stock market, Insurance, Banking, Technology, Pharmaceutical, and Public Sector.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Awards;
