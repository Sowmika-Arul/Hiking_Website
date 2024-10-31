import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import image from '../Assets/background.png';
const Home = () =>
{
    return(
        <div>
        <section className="banner-image" style={{ backgroundImage: `url(${image})`, height: '100vh'}}>
         <Header/>
         <Banner/>
         </section>
         <div className='new' style={{ backgroundColor: 'rgb(11, 29, 38)' }}>
            <Page1/>
            <Page2/>
            <Page3/>
         </div>
        </div>
    )
}

export default Home