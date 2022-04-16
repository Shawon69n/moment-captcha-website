import React from 'react';
import banner from '../../../Assets/image/Banner/banner2.jfif'
const Banner = () => {
    return (
        <div>
        <img style={{height:'800px'}} className='w-100 fluid' src={banner} alt="" />
        </div>
    );
};

export default Banner;