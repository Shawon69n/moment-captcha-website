import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Assets/image/Logo/camera-flash.png'
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className='nav-bg ' sticky='top'  >
<Container>
<Navbar.Brand as={Link} to="/">
   <div className='d-flex '>
   <img className=' px-2' src={logo} height={34} alt=''/>
   <h3>Moment Captcha</h3>
   </div>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
 <Nav className="me-auto">
 
 </Nav>
 <Nav>
   <Nav.Link as={Link} to="/home"><span className='text-white'>Home</span></Nav.Link>
   <Nav.Link as={Link} to="/services"><span className='text-white'>Services</span></Nav.Link>
   <Nav.Link as={Link} to="/blogs"><span className='text-white'>Blogs</span></Nav.Link>
   {user? <button onClick={handleSignOut} className='btn btn-dark'><span className='text-white'>sign out</span></button> : <Nav.Link as={Link} to='/login'> <span className='text-white'>Log in</span></Nav.Link>}
   {user ? '' : <Nav.Link as={Link} to="/register"><span className='text-white'>Register</span></Nav.Link>}
 </Nav>
</Navbar.Collapse>
</Container>
</Navbar>

     </>
    );
};

export default Header;