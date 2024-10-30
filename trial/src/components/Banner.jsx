import React from 'react';
import '../Styles/Banner.css';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";


const Banner = () => (
    <>
    <div className='banner'>
    <div className='left'>
        <h4 style={{transform: 'rotate(90deg)'}}>Follow us</h4>
        <div className='icon'>
        <FaInstagram />
        <FaTwitter />
        </div>
    </div>
    <div className='center'>
        <div className='one'>
        <hr className='oneLine'/>
         <p style={{letterSpacing: '0.5rem', color: 'hsl(38, 89%, 58%)', fontWeight: 'bold'}}>A HIKING GUIDE</p>
    </div>
    <div className='two'>
        <p>Be Prepared For The</p>
        <p>Mountains And Beyond!</p>
    </div>
    <div className='three'>
        <h2>scroll down</h2>
        <FaArrowDown/>
    </div>
    </div>
    <div className='right'>
        {/* <hr style={{transform: 'rotate(90deg)' }} /> */}
        <h4>Start</h4>
        <h3>01</h3>
        <h3>02</h3>
        <h3>03</h3>
    </div>
    </div>
    <div className='overlay'>
   </div>
    </>
)

export default Banner;