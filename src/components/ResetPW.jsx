import React, {useState} from 'react';
import '../css/landing.css';

import firebase from '../api/firebase/index.js';
import MatButton from './MatButton.jsx'

import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom';
// import Background from '../images/mcg5-blur.jpg';

const ResetPW = (props) => {


  const [email, setEmail] = useState('hello')
  const [validEmail, setValidEmail] = useState(false)
  const [messageText, setMessageText] = useState('Type a valid email to reset password...')
  const [buttonstate, setButtonState] = useState(false)
  const messageStyle = {
    color: 'blue',
  };

  const isEmailValid = (emailTxt) => {
    return !!emailTxt.match(/.+@.+/);
  }

  const updateEmail = (e) => {
    
    setEmail(e.target.value)
    setValidEmail(isEmailValid(e.target.value))
    console.log(`Email:${e.target.value} - valid:${validEmail}`)
  }

  const disableButton = () => {

    return validEmail ? false : true

  }


  const ResetPassword = () => {

    console.log("ResetPassword clicked...email:", email);

    let auth = firebase.auth();
    // let emailAddress = "aqwerty543@gmail.com";

    auth.sendPasswordResetEmail(email).then(function () {
 
      setMessageText(`Check email ${email} to reset password...`)
  
    }).catch(function (error) {
      // An error happened
      console.log("Error sending password reset email...", error.message)
      setMessageText(`Error sending password reset email... ${error.message}`)
    });

  }

  return (

    <div className='landing blur'>

      <h1 className='lpHeading'>Reset Password</h1>

      <div className="loginPanel">
        <input className="loginInput" name="" type="email" onChange={updateEmail} placeholder="Enter email id..." />
        <button className="button2"  onClick={ResetPassword}  disabled={disableButton()} >Reset</button>
        <Link className="lpLink" to='/login'>Back to Login</Link>
      </div>

      <p style={messageStyle}>{messageText}</p>

    </div>

  )
};

export { ResetPW as default }