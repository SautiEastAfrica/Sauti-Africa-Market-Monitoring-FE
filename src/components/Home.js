import React from 'react';

import Footer from './Footer'; 

import '../styles/Home.scss'; 

function Home (){

    return(
        <div>
            <img src={require('../images/sauti-2.jpg')}/>

        <div className='home'>
            
            
            <h1>Market Monitoring</h1>

            <p className='body-text'>
                Market Monitoring is a tool provided by Sauti East Africa Limited to monitor food prices in the EAC. 

                We use recent data to provide an up-to-date picture of marketplaces where food products could be in crisis. 
                <br/>
            </p>

            <img className='body-img' src={require('../images/sauti-3.jpg')}/>

            <img className='body-img' src={require('../images/sauti-4.jpg')}/>
            
            <p className='body-text'>
                Sauti Africa is a mobile-based trade and market information platform, empowering East Africa's women-led SMEs to trade legally, safely and profitably across borders. 
                <br/>
            </p>

            <p className='body-text'>
                <h2>Market Monitoring</h2>
                <br/>
                    With our Market Monitoring tool, you can monitor food product prices across East Africa marketplaces in close to real-time. 
                <br/>
            </p>

            <img className='body-img' src={require('../images/sauti-6.jpg')}/>

            <img className='body-img' src={require('../images/sauti-7.jpg')}/>

            </div>
            <Footer/>
            </div>
    )
}

export default Home;
