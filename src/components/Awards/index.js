import React from 'react';

// import other components here
import Header from '../Header';

// import images here
import AwardImg from '../../assets/Awards/Top100AsianStarsInUKTech.png';

function Awards() {
    return (
        <div className='container'>
            <Header heading='Awards' />
            <br></br>
            <img src={AwardImg} className='img-fluid awards-img'></img>
            <h3 className='awards-heading'>
                Asians In Tech Award 2020
            </h3>
            <p className='awards-text'>
                Asad has received the Top 100 Asians Stars In UK Tech Award 2020 for his work in the risk and regulatory sector, which delivers a suite of flexible services that assist clients with assessments, reviews, deep dives, and forecasts. Most notably having delivered projects and developed business across digital technology, change, regulatory, risk, governance and IT projects across a range of FTSE 100 clients within Enterprise Software, AIM stock market, Insurance, Banking, Technology, Pharmaceutical, and Public Sector.
            </p>
        </div>
    )
}

export default Awards;
