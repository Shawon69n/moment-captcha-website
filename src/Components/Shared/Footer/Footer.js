import React from 'react';
import { RiFacebookCircleLine } from 'react-icons/ri';
import {AiFillTwitterCircle} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import './Footer.css'
const Footer = () => {
    return (
        <footer className=''>
           
            
        <div className="container">

            <div className="row">

                <div className="col">
                <h3 className='text-white'>Moment captcha</h3>
                 <p>I like to capture wedding photography and i am very professional with that .</p>
                 <p><small>Copyright © 2020 by shawon</small></p>
                </div>

                <div className="col">
                <input type="email" placeholder='your email' />
                <input className='inp-btn' type="button" value="Join now" />
                </div>
                <div className="col">
                <li><span className='icons'><RiFacebookCircleLine></RiFacebookCircleLine></span></li>
                <li><span className='icons'><AiFillTwitterCircle></AiFillTwitterCircle></span></li>
                <li><span className='icons'><GrInstagram></GrInstagram></span></li>
                
                </div>
            </div>
         </div>
 

            
          
            

             

            
                
                
            
            




        </footer>
    );
};

export default Footer;