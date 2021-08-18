import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import './style.css';

// define text items here
const TEXTS = [
    "With vast knowledge of the rapidly changing business world, Asad Ansari is the founder and managing director of multiple risk advisory consultancies, with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.",
    "Being well versed in public relations, Asad has been involved in charity organisations within UK and Asia including the British Asian Trust Mental Health Association in Pakistan to raise awareness of mental health.",
    "He has also volunteered for Graham Layton Trust, providing free eye care for people of all backgrounds throughout Pakistan.",
    "Among other volunteering roles, Asad is on the Armed Forces Muslim Forum communication group committee dealing with interfaith and diversity related issues. Asad is currently involved in the City of London Campaign to become the Commons Councillor."
];

const AboutText = () => {
    // define states here
    const [index, setIndex] = useState(0);

    // define funtionality to flip text items
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            4000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='paragraph-container'>
            <h2 style={{ fontSize: '35pt', color: 'teal', fontWeight: '700' }}>About Asad</h2>
            <p className='paragraph-text'>
                <TextTransition
                    text={TEXTS[index % TEXTS.length]}
                    springConfig={presets.wobbly}
                    delay='2000'
                />
            </p>
        </div>
    )
}

export default AboutText;