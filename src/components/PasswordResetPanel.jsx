import React, { useState } from 'react'

import MatButton from './MatButton.jsx';
import firebase from '../api/firebase/index.js';

const PasswordResetPanel = (props) => {

    const { emailAddress } = props
    const [messageText, setMessageText] = useState('')
    const [buttonstate, setButtonState] = useState(false)
    const messageStyle = {
        color: 'blue',
      };

    const ResetPassword = () => {

        console.log("ResetPassword clicked...");

        let auth = firebase.auth();
        // let emailAddress = "aqwerty543@gmail.com";

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            setMessageText(`Check email ${emailAddress} to reset password...`)
            setButtonState(true)
        }).catch(function (error) {
            // An error happened
            console.log("Error sending password reset email...", error.message)
            setMessageText(`Error sending password reset email... ${error.message}`)
        });

    }

    return (

        <>
            <MatButton text={'reset password'} onClick={ResetPassword} disabled={buttonstate} />
            <p style={messageStyle}>{messageText}</p>
        </>

    )

}
export { PasswordResetPanel as default }