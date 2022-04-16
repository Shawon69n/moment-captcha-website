import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>This is services</h1>
            <Link to='/checkout'><button>checkout</button></Link>
        </div>
    );
};

export default Services;