export var setRoundNum = (num) => {
  return {
    type: 'SET_ROUND_NUM',
    roundNum: num
  }
};

export var setMaxRoundNum = (num=1) => {
  return {
    type: 'SET_MAX_ROUND_NUM',
    maxRoundNum: num
  }
};


export var getMaxRoundNum = (games=[]) => {
  // var element = games.find( (game) => {
  //   return game.round_num > Date.now();
  // });
  if (games.length > 0) {
    var max = games.reduce( (a,b) => { return a.round_num > b.round_num ? a : b } );
    return max.round_num;
  }
  else {
    return 0;
  }
  
  
};
