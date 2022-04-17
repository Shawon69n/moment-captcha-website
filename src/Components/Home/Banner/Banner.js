import React from 'react';
import {IoIosArrowDown} from 'react-icons/io'
import './Banner.css'
const Banner = () => {
    return (
        <div>
        <img style={{height:'600px'}} className='w-100' src={`https://static.dw.com/image/59176388_101.jpg`} alt="" />

        <div className='text-style '>
            <p className='fs-1'>Want to capture your wedding prefectly?</p>
            <p className='fs-1 down-arrow'><IoIosArrowDown></IoIosArrowDown></p>
        </div>
        </div>
    );
};

export default Banner;