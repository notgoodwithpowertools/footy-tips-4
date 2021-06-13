import React, { useState } from 'react';

import '../css/tips.css'

const GameInfo  = (props) => {

  const { venue, datestamp } = props;

  const [mode, setMode] = useState('venue');

  const d = new Date(datestamp);

  const dateString = d.toDateString() + d.toLocaleTimeString();

  const toggleMode = () => {

    if (mode === 'venue') {
      setMode(datestamp)
    }
    else {
      setMode('venue')
    }

  }
  
  const getOutput = () => {
    if (mode === 'venue') {
      return (<div><p className='tipsInfo'>{venue}</p></div>)
    }
    else {
      return (<div><p className='tipsInfo'>{d.toDateString()}</p><p className='tipsInfo'>{d.toLocaleTimeString()}</p></div>)
    }
  }
  // const output = (mode === 'venue' ? venue : dateString);
  
  return (
     <div className='tipsDetails' onClick={toggleMode}>
       {getOutput()}
     </div>
  )

}

export { GameInfo as default }
