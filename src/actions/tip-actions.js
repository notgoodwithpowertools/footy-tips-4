import { firebaseRef } from '../api/firebase/index.js';

export var setTip = (userId, gameId, tipTeamId) => {
  console.log("setTip...User ID:", userId + " Game ID:", gameId + " tip team ID:", tipTeamId);

  if (tipTeamId === undefined) {
    //firebaseRef.child(`tips/${userId}/tips/${gameId}`).remove();
    firebaseRef.child(`season-2021-tips/${userId}/tips/${gameId}`).remove();
  }
  else {
    // firebaseRef.child(`tips/${userId}/tips/${gameId}`).set(tipTeamId);
    firebaseRef.child(`season-2021-tips/${userId}/tips/${gameId}`).set(tipTeamId);
  }

}

export var getTip = (tips, aGameId, aUserId) => {

  // console.log("getTip...tips:", tips);
  // console.log("IsArray:", Array.isArray(tips));

  var tipsAvailable = Array.isArray(tips);
  var atipId = undefined;

  if (tipsAvailable) {

    var aTipElement = tips.find( (element) => {
      return element.uid === aUserId;
    });

    if (aTipElement !== undefined) {
      atipId = aTipElement.tips[aGameId];
    }

  }

  var aTip = {
    tip_team_id: atipId
  }

  return (aTip);

}

export var updateTips = (tips) => {
  return {
    type: 'UPDATE_TIPS',
    tips: tips
  }
};

export var startAddTips = () => {
  console.log('startAddTips...');
  return (dispatch, getState) => {

    // var tipsRef = firebaseRef.child(`/tips`);
    var tipsRef = firebaseRef.child(`season-2021-tips`);
    tipsRef.on('value', snap => {

      // return snap.val();
      var tips = snap.val() || {};
      // console.log("snap.val() games", snap.val());
      var parsedTips = [];

      Object.keys(tips).forEach( (uid) => {
        parsedTips.push({
          uid: uid,
          // parsedRoundScores,
          ...tips[uid]
        });
      });

      // console.log("tips (parsed from Firebase):", parsedTips);
      dispatch(updateTips(parsedTips));

    });
  };
};

export var getTipTotals = (games, tips, users) => {
  console.log("getTipTotals...");
  // console.log("users:", users);
  // console.log("games:", games);
  var leaderboard = users.map( (user, index) => {
    var roundScores = [];
    // console.log("User detail:", user.name + " , ID:", user.id);
    for (var aGame of games) {
      // console.log(`Game: id:${aGame.id}, Date:${aGame.datestamp}, Round:${aGame.round_num}, Game:${aGame.result_team_id}`);
      // if (aGame.datestamp > Date.now()) {
      //   console.log("All previous games verified");
      //   break;
      // };

      // Get & check tips
      var aTip = getTip(tips, aGame.id, user.id);
      // console.log("Compare - ID:", aGame.id + "Round:", aGame.round_num + " Result:", aGame.result_team_id + " ,Tip:", aTip.tip_team_id);
      // if ((aGame.result_team_id !== undefined) && (aGame.result_team_id === aTip.tip_team_id)) {

      // Count draws (code = 99) as correct tips
      if ((aGame.result_team_id !== undefined) && ((aGame.result_team_id === aTip.tip_team_id) || (aGame.result_team_id === 99)) ){

        if (roundScores[aGame.round_num] === undefined) {
          // console.log("Nan");
          roundScores[aGame.round_num] = 0;        
        }

        roundScores[aGame.round_num] += 1;
        // console.log("Good tip! Increment round score total is:", roundscoreTotal);
      
      }
      else {
        // console.log("Bad tip! or game not complete");
      }
     
    }
    
    var totalTips = roundScores.reduce( (sum, current) => {
      return sum+current;
    }, 0);
    // console.log("totalTips:", totalTips);

    return {uid: user.id, firstname: user.name, imageURL: user.imageURL, roundscores: roundScores, totalTips: totalTips};
  });

  // console.log("Leaderboard from TipData:", leaderboard);
  return leaderboard

}
