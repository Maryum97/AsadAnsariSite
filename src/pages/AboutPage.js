import React from 'react';
import './AboutPage.css';

import asad_image from '../assets/asad_with_microphone_cut_flipped_darker.png';

function AboutPage() {
    return (
        <div className="aboutpage-container">
            <img className="aboutpage-image" src={asad_image}/>
            <div className="aboutpage-content">
                <h1 className="paragraph1">Asad Ansari</h1>
                <br/><br/>
                <p className="paragraph1">
                    With vast knowledge of the rapidly changing business world, Asad Ansari is the founder 
                    managing director of multiple risk advisory consultancies, 
                    with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.
                </p>
                <br/>
                <p className="paragraph2">
                    Being well versed in public relations, 
                    Asad has been involved in charity organisations within UK and Asia including the 
                    British Asian Trust Mental Health Association 
                    in Pakistan to raise awareness of mental health.  
                </p>
            </div>
            <div className="aboutpage-background"/>
        </div>
    )
}

export default AboutPage;