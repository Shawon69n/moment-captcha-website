import React from 'react';
import img1 from '../../../Assets/image/img1.jpg'
import img2 from '../../../Assets/image/img2.jpg'
import img3 from '../../../Assets/image/img3.jfif'
import img4 from '../../../Assets/image/img4.jpg'
import img5 from '../../../Assets/image/img5.jpg'
import img6 from '../../../Assets/image/img6.jpg'
const Myworks = () => {
    return (
        <div>
              <div>
            <h1 className='mt-5 text-primary '>Some of my work</h1>
            


<div className="container round-img">
  <div className="row g-3 py-5">
    <div className="col-lg-4 col-md-6">
        <img className='w-100' src={img1} alt="" />
       </div>

    <div className="col-lg-4 col-md-6">
    <img className='w-100' src={img2} alt="" />
    </div>

    <div className="col-lg-4 col-md-6">
    <img className='w-100' src={img3} alt="" />
    </div>
    <div className="col-lg-4 col-md-6">
        <img className='w-100' src={img4} alt="" />
       </div>

    <div className="col-lg-4 col-md-6">
    <img className='w-100' src={img5} alt="" />
    </div>

    <div className="col-lg-4 col-md-6">
    <img className='w-100' src={img6} alt="" />
    </div>

     </div>
    </div>
  </div>
        </div>
    );
};

export default Myworks;