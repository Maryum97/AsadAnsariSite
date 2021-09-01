import React, { useEffect } from 'react';
import './style.css';

// import other components here
import HeaderText from './HeaderText';
import AboutText from './AboutText';

// framer motion dependencies
import { motion } from 'framer-motion';
import styled from 'styled-components';

// aos dependencies
import Aos from 'aos';
import 'aos/dist/aos.css';

// import images here
import AsadLogo from '../../assets/Navbar/AsadAnsariLogo.png';

// define constants for framer motion effects here
// parents of image
const ImageContainer = styled(motion.div)`
`;

const Intro = () => {
    // initialise aos
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return (
        <div
            className='page-intro'
        >
            <div className='intro-content card'>
                <div className='inner-intro-content card'>
                    <h1 className='intro-header'>
                        <HeaderText />
                    </h1>
                    <br></br>
                    <div className='intro-grid card'>
                        <ImageContainer
                            className='img-container'
                            animate={{
                                scale: [0, 1.3, 0.6],
                                x: -10,
                                scaleX: [-1, 0, 1],
                                scaleY: [0, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 1
                            }}
                        >
                            <img
                                src={AsadLogo}
                                className='AsadPic img-fluid'
                                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-100px' }}
                            >

                            </img>
                        </ImageContainer>
                        <div
                            className='about-text'
                            style={{ marginTop: '25px' }}
                            data-aos='fade-in'
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-delay="1500"
                        >
                            <AboutText />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
