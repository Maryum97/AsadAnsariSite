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
import AsadPic from '../../assets/About/Asad-Ansari.jpg';

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
                            animate={{
                                scale: [0, 1.4, 0.8],
                                rotate: [0, 60, -360],
                                x: -10,
                                y: -40,
                                scaleX: [-1, 0, 1],
                                scaleY: [0, 1.05]
                            }}
                            transition={{
                                duration: 2,
                                delay: 1
                            }}
                        >
                            <img
                                src={AsadPic}
                                className='AsadPic img-fluid'
                                style={{ marginLeft: 'auto', marginRight: 'auto' }}
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
