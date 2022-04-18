import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description, price} = service;

    return (
        <div className='m-3'>
        <Card className='card-box'>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>{price}</Card.Title>
          <Link to='/booking' className='custom-btn btn-3 button mb-5 frame '>Book</Link>
        </Card.Body>
      </Card>
        
        
    </div>
    
    );
};

export default Service;