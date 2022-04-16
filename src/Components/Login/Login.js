import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const handleEmailOnBlur = (e) =>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value)
        if(validEmail){
            setEmail(e.target.value);
            setError('')
        }
        else{
            setError('Invalid email')
        }
        
    }
    const handlePasswordOnBlur = (e) =>{
        setPassword(e.target.value);
    }
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
        
       
        
    }
    
    if(user){
        navigate('/')
    }
    

    return (
        <div className="login-container login-card">
        <div className="login-title">LOGIN</div>
        <form onSubmit={handleOnSubmit} className="login-form">
            <input onBlur={handleEmailOnBlur} type="text" placeholder="Your Email" />
            
            <input onBlur={handlePasswordOnBlur} type="password" placeholder="password"  />
            
            <button>Login</button>

            {/* {error && <p className="error-message">{error}</p> } */}
            {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
            

            <p>Don't have an account? <Link to="/register">Sign up first</Link> </p>
            {error?  <p className='error-message'>{error}</p> : ''}
        </form>

        {/* <button onClick={() => signInWithGoogle()}>Google</button> */}
    </div>
    );
};

export default Login;