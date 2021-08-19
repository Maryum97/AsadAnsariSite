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
        <div>
            Items here!
        </div>
    )
}

export default PhilItems;
