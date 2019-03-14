import React from 'react';
import { getDateTime } from '../actions/date-actions.js';
import '../css/tips.css'

// export const GameInfo = ({venue, datestamp}) => {
export default class GameInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mode: 'venue'};
    this.handleClick = this.handleClick.bind(this);
    // this.loadGames();
  }

  handleClick() {
    if (this.state.mode === 'venue') {
      this.setState({mode: 'date'});
    }
    else {
      this.setState({mode: 'venue'})
    }
    // this.setState(prevState => ({
    // isToggleOn: !prevState.isToggleOn
    // }));
  }

  render() {
  //   if (this.state.mode === 'venue') {
  //     return <div className='tipsDetails' onClick={this.handleClick}><p>{this.props.venue}</p></div>;
  //   }
  //   else {
  //     return <div className='tipsDetails' onClick={this.handleClick}><p>{getDateTime(this.props.datestamp)}</p></div>;
  //   }
  // }

    var output = (this.state.mode === 'venue' ? this.props.venue : getDateTime(this.props.datestamp));
    return <div className='tipsDetails' onClick={this.handleClick}><p>{output}</p></div>;
  }

}
/*
  // let display = 'venue';
  let output = '';

  var handleClick = () => {
     if (output === venue) {
       // display = 'date'
       output = getDateTime(datestamp);
     }
     else {
       // display = 'venue'
      output = venue;
     }
     console.log("handleClick - toggle game  info...", output);
  }

  return (
    <div className='tipsDetails' onClick={() => {handleClick()}}><p>{output}</p></div>
  );

}

export default GameInfo;
*/
