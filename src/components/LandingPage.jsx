// var React = require('react');

import React from 'react';

import {
  //BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom';

// import Login from './Login.jsx';
import '../css/landing.css';
import '../css/button.css';

// Refactor to stateless functional Component
var LandingPage = (props) => {
  console.log("LandingPage...", props);
  return (

    <div className="landing">
      <div className="lpHeadingPanel">
        <h1 className='lpHeading'>Footy Tips {props.season}</h1>
      </div>
      <div className="lpButtonsPanel">
        <Link className="button2 link" to='/login'>Sign in</Link>
        <Link className="button2 link"to='/register'>Register</Link>

      </div>
    </div>

  )
};

export default LandingPage;
