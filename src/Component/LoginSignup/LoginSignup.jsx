import React, { useState } from 'react';
import './LoginSignup.css';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up');

//   const toggleAction = () => {
//     setAction(action === 'Sign Up' ? 'Login' : 'Sign Up');
//   };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {
            action==="Login"?<div></div>: <div className='input'>
            <img src={person} alt='' />
            <input type='text' placeholder='Enter Your Name' />
          </div>
        }
       
        <div className='input'>
          <img src={email} alt='' />
          <input type='email' placeholder='Enter Your Mail' />
        </div>
        <div className='input'>
          <img src={password} alt='' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      {
        action==="Sign Up"?<div></div>: <div className='forget-password'>
        Forget Password? <span>click here</span>
      </div>
      }
     
      <div className='submit-container'>
        <div className={action === 'Sign Up' ? 'submit great' : 'submit '} onClick={() => setAction('Sign Up')}>
          {action}
        </div>
        <div className={action === 'Login' ? 'submit ' : 'submit great'} onClick={() => setAction('Login')}>
          {action === 'Sign Up' ? 'Login' : 'Sign Up'}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
