import React from 'react';
import Banner from './Banner/Banner';
import Myworks from './Myworks/Myworks';
import './Home.css'
import Services from '../Services/Services/Services';
const Home = () => {
    return (
        <>
            
            <div className='banner'>
            <Banner></Banner>
            
            </div>
            
            <div className='margin-top'>
            <Services></Services>
            </div>
            <Myworks></Myworks>
            </>
    );
};

export default Home;