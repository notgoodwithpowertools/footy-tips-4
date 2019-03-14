// var React = require('react');
import React from 'react';
import '../css/numbercircle.css';
import '../css/player.css';
//import andrewimg from '../images/george.png';
//import ryanimg from '../images/ryan.png';

//var moment = require('moment');

//var {connect} = require('react-redux');
//var actions = require('../actions/ftips-actions.jsx');

// Convert to React.Component
//export var Todo = React.createClass({
// export class Player extends React.Component {

export const Player = (props) => {

  // render () {

    var {firstname, imageURL, rank, roundscores, totalTips} = props;

    // console.log("name:", firstname + ', URL:', imageURL);
    /*
    var getImage = (aname) => {
      if (eval((aname + 'img').toLowerCase()) === undefined ) {
        return ryanimg;
      } else {
          return (eval(name + 'img'));
      }
    }

    var image = getImage(name);

    console.log("image:", image); */
    //var todoClassname = completed ? 'todo todo-completed' : 'todo';

    //var imageFile = 'images/' + `${sname}.jpg`.toLowerCase();
    // var imageName = 'harry';
    if ( imageURL === undefined ) {
      try {
        var fileName = firstname.toLowerCase()
        console.log("fileName:", fileName);
        imageURL = require(`../images/${fileName}.png`)

      }
      catch(err) {
        console.log("Err:", err);
        imageURL = require(`../images/ryan.png`)
      }
    }


    // roundscores = [2,5,7,9,11];
    // console.log("roundscores:", roundscores);
    // var myObject = {
    //   1: 4,
    //   2: 5,
    //   3: 9,
    //   4: 2
    // };
    // for (const key of Object.keys(myObject)) {
    //   console.log("Object:", key, myObject[key]);
    //   console.log("Key:", key + "myObject @ key:", myObject[key]);
    // };

    var getResultList = () => {
      if (roundscores !== undefined) {
        var outputArray = [];
        // var score = 0;
        for (const key of Object.keys(roundscores)) {
          // console.log("Object:", key, roundscores[key]);
          // console.log("Key:", key + " myObject @ key:", roundscores[key]);
          // score += roundscores[key];

          var highlightClass = 'numbersquare'
          if (roundscores[key] === 9 ) {
            highlightClass = 'red numbersquare'
          };

          outputArray.push(<div key={key} className={highlightClass}>{roundscores[key]}</div>)
          // return (
          //   <div key={key} className='numbersquare'>{myObject[key]}</div>
          // )
        };
        return outputArray;
      }
      return [];
    }

    return (

      <div className='playerRow'>
        {/* <div className='details'><div className='numbercircle'>{rank}</div><img src={require(`../images/${imageName}.png`) } alt={require('../images/george.png') }/><p className='player'>{name}</p></div> */}
        <div className='details'><div className='numbercircle'>{rank}</div><img className='pic' src={ imageURL } alt=''/><p className='player'>{firstname}</p></div>

        <div className='results'>
          {getResultList()}

        </div>
        <div className='total'><div className='totalBox'>{totalTips}</div> </div>
      </div>

    )
  };

export default Player;
