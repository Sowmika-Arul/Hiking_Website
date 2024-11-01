import React from 'react';
import '../Styles/Header.css'; 
import { MdOutlineAccountCircle } from "react-icons/md";

const Home = () => (
    <div className='nav'>
    <div className = "nav-start">
     <h1>MNTN</h1>
    </div>
    <div className='nav-center'>
      <h1>Equipment</h1>
      <h1>About us</h1>
      <h1>Blog</h1>
    </div>
        <div className='nav-end'>
          <MdOutlineAccountCircle  className='icon'/>
           <h1>Account</h1>
        </div>
        </div>
)

export default Home;
