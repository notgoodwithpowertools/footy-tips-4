var admin = require("firebase-admin");
var firebase = require("firebase");
var env = require('node-env-file');
var Time = require('./date-actions.js');

// Fetch the service account key JSON file contents
// var serviceAccount = require('./FootyTips-Dev-203df7e03e29.json');
var serviceAccount = require('../../../Downloads/footytips-dev-firebase-adminsdk-ozaty-f0916a38c8.json');
// config/FootyTips-Prod-0c7373417381.json

// Load any undefined ENV variables form a specified file.
env('./local.env');

console.log("process.env.DATABASE_URL:", process.env.DATABASE_URL);

try {

  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    credential: admin.credential.cert(serviceAccount),
  };


} catch (e) {

}


// Initialize the app with a service account, granting admin privileges
/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL
});
*/
admin.initializeApp(config);
//firebase.auth()

// admin.auth().createUser({
//   uid: "aqwerty001",
//   email: "aqwerty543@gmail.com"
// })
// .then(function(userRecord) {
//     // A UserRecord representation of the newly created user is returned
//     console.log("Successfully created new user:", userRecord.uid);
//     console.log("Successfully created new user:", userRecord.email);
//     console.log("Successfully created new user:", userRecord.isAnonymous);
//     console.log("Successfully created new user:", userRecord.emailVerified);
//     //userRecord.sendEmailVerification()
// })
// .catch(function(error) {
//     console.log("Error creating new user:", error);
// });

/*
var user = firebase.auth().currentUser;
user.sendEmailVerification().then(function() {
  // Email sent.
}, function(error) {
  // An error happened.
});
*/


// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref();

var games = [
    {
       "id":0
      ,"round_num":1
      ,"home_team_id":2
      ,"away_team_id":3
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:20 pm"))
    },
    {
       "id":1
      ,"round_num":1
      ,"home_team_id":2
      ,"away_team_id":13
      ,"venue":"MCG"
      ,"datestamp": Number(Time.getTimeStamp("3/25/2017", "7:20 pm"))
    }
];



var gamesRef = db.ref('/season-2018-games');

gamesRef.set(games, function(error) {
  if (error) {
    console.log("Games data could not be saved.", error);
  }
  else {
    console.log("Games data saved successfully."); /*ref.once("value", function(snapshot) {
  console.log(snapshot.val()); }); */
  }
});

ref.once("value", function(snapshot) {
  console.log('Finish...', snapshot.val());
});
