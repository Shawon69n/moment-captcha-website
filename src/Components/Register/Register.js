import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    
    const navigate = useNavigate();
   
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(email,password)
        
    }

   if(user){
    navigate('/')
   }
   
   
   
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
    const handleConfirmPasswordOnBlur = (e) =>{
        if(e.target.value === password){
            setPassword(e.target.value)
            setError('')
        }
        else{
            setError('password do not match')
        }
    }
    
    
    return (
        <div className="login-container login-card">
        <div className="login-title">REGISTER</div>
        <form onSubmit={handleOnSubmit} className="login-form">
            <input onBlur={handleEmailOnBlur} type="text" placeholder="Your Email" />
            
            <input onBlur={handlePasswordOnBlur} type="password" placeholder="password"  />
            <input onBlur={handleConfirmPasswordOnBlur} type="password" placeholder="Confirm password"  />
            
            <button>Register</button>

            {error && <p className="error-message">{error}</p> }
            {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
            

            <p>Already have an account? <Link to="/login">Log in</Link> </p>
            {/* {error?  <p className='error-message'>{error}</p> : ''} */}
        </form>

        {/* <button onClick={() => signInWithGoogle()}>Google</button> */}
    </div>
    );
};

export default Register;