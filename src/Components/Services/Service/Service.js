import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name, img, description, price} = service;

    const navigate = useNavigate();

    const handleSingleSeviceBtn = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='m-3'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>{price}</Card.Title>
          <Link to='/booking' onClick={() => handleSingleSeviceBtn(id)} className='custom-btn btn-3 button mb-5 frame '>Book</Link>
        </Card.Body>
      </Card>
        
        
    </div>
    
    );
};

export default Service;