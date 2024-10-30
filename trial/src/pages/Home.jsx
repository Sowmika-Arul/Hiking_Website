import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import image from '../Assets/background.png';
const Home = () =>
{
    return(
        <div>
        <section className="banner-image" style={{ backgroundImage: `url(${image})`, height: '100vh'}}>
         <Header/>
         <Banner/>
         </section>
         <div className='new' style={{backgroundColor: 'blue'}}>

         </div>
        </div>
    )
}

export default Home