var admin = require("firebase-admin");
var firebase = require("firebase");
// var env = require('node-env-file');
var Time = require('../src/actions/date-actions.js');

// Fetch the service account key JSON file contents
// var serviceAccount = require('./FootyTips-Dev-203df7e03e29.json');
// var serviceAccount = require('../../../Downloads/footytips-dev-firebase-adminsdk-ozaty-e78f9fc128.json');
// config/FootyTips-Prod-0c7373417381.json

// Load any undefined ENV variables form a specified file.
// env('./local.env');

// console.log("process.env.DATABASE_URL:", process.env.DATABASE_URL);
// Dev
// try {
//   var config = {
//     apiKey: "AIzaSyAF5pJIIeGCnKGM2GZKDga2DuJg2aeEp-4",
//     authDomain: "footytips-dev.firebaseapp.com",
//     databaseURL: "https://footytips-dev.firebaseio.com",
//     projectId: "footytips-dev",
//     storageBucket: "footytips-dev.appspot.com",
//     messagingSenderId: "189591411481"
//   };
// } catch (e) {
//
// }


var serviceAccount = require('../../../Downloads/footytips-prod-firebase-adminsdk-4ui2u-e896314ea3.json');
// Prod
try {
  var config = {
    apiKey: "AIzaSyAAiEJppMmrMwe32hA9qNKial-cqJOhk9c",
    authDomain: "footytips-prod.firebaseapp.com",
    databaseURL: "https://footytips-prod.firebaseio.com",
    projectId: "footytips-prod",
    storageBucket: "footytips-prod.appspot.com",
    messagingSenderId: "688108608555"
  };
} catch (e) {

}

console.log("databaseURL:", config.databaseURL);
// console.log("Time:", Number(Time.getTimeStampMDY("3/25/2017", "7:20 pm")));

// try {
//
//   var config = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     databaseURL: process.env.DATABASE_URL,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     credential: admin.credential.cert(serviceAccount),
//   };
//
//
// } catch (e) {
//
// }


// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL
});

// admin.initializeApp(config);
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
  ,"datestamp": Time.getTimeStampDMY('21/03/2019' ,  '19:20')
  ,"venue":"MCG"
  ,"home_team_id":2
  ,"away_team_id":13
},
{
   "id":1
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('22/03/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":6
},
{
   "id":2
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('23/03/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":12
},
{
   "id":3
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('23/03/2019' ,  '16:35')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":9
},
{
   "id":4
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('23/03/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":15
},
{
   "id":5
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('23/03/2019' ,  '20:20')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":15
},
{
   "id":6
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('24/03/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":7
},
{
   "id":7
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('24/03/2019' ,  '15:20')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":4
},
{
   "id":8
  ,"round_num":1
  ,"datestamp": Time.getTimeStampDMY('24/03/2019' ,  '18:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":11
},
{
   "id":9
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('28/03/2019' ,  '19:20')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":3
},
{
   "id":10
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('29/03/2019' ,  '19:50')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":0
},
{
   "id":11
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('30/03/2019' ,  '16:35')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":14
},
{
   "id":12
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('30/03/2019' ,  '17:10')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":2
},
{
   "id":13
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('30/03/2019' ,  '19:25')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":10
},
{
   "id":14
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('30/03/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":8
},
{
   "id":15
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('31/03/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":1
},
{
   "id":16
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('31/03/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":16
},
{
   "id":17
  ,"round_num":2
  ,"datestamp": Time.getTimeStampDMY('31/03/2019' ,  '16:40')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":5
},
{
   "id":18
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('04/04/2019' ,  '19:50')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":6
},
{
   "id":19
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('05/04/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":4
},
{
   "id":20
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('06/04/2019' ,  '13:45')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":15
},
{
   "id":21
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('06/04/2019' ,  '16:35')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":13
},
{
   "id":22
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('06/04/2019' ,  '19:25')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":12
},
{
   "id":23
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('06/04/2019' ,  '19:25')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":15
},
{
   "id":24
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('07/04/2019' ,  '14:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":7
},
{
   "id":25
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('07/04/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":11
},
{
   "id":26
  ,"round_num":3
  ,"datestamp": Time.getTimeStampDMY('07/04/2019' ,  '17:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":14
},
{
   "id":27
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('11/04/2019' ,  '19:20')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":10
},
{
   "id":28
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('12/04/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":16
},
{
   "id":29
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('13/04/2019' ,  '13:45')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":8
},
{
   "id":30
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('13/04/2019' ,  '14:10')
  ,"venue":"MCG"
  ,"home_team_id":4
  ,"away_team_id":1
},
{
   "id":31
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('13/04/2019' ,  '16:35')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":13
},
{
   "id":32
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('13/04/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":0
},
{
   "id":33
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('13/04/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":5
},
{
   "id":34
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('14/04/2019' ,  '14:40')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":2
},
{
   "id":35
  ,"round_num":4
  ,"datestamp": Time.getTimeStampDMY('14/04/2019' ,  '15:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":9
},
{
   "id":36
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('18/04/2019' ,  '19:35')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":3
},
{
   "id":37
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('19/04/2019' ,  '16:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":4
},
{
   "id":38
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('19/04/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":12
},
{
   "id":39
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('20/04/2019' ,  '13:45')
  ,"venue":"UNSW Canberra Oval"
  ,"home_team_id":8
  ,"away_team_id":5
},
{
   "id":40
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('20/04/2019' ,  '16:35')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":14
},
{
   "id":41
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('20/04/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":13
  ,"away_team_id":15
},
{
   "id":42
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('21/04/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":2
},
{
   "id":43
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('21/04/2019' ,  '16:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":7
},
{
   "id":44
  ,"round_num":5
  ,"datestamp": Time.getTimeStampDMY('22/04/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":6
},
{
   "id":45
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('24/04/2019' ,  '19:35')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":10
},
{
   "id":46
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('25/04/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":4
  ,"away_team_id":3
},
{
   "id":47
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('26/04/2019' ,  '19:50')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":11
},
{
   "id":48
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('27/04/2019' ,  '13:45')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":1
},
{
   "id":49
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('27/04/2019' ,  '16:35')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":0
},
{
   "id":50
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('27/04/2019' ,  '19:25')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":8
},
{
   "id":51
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('27/04/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":16
},
{
   "id":52
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('28/04/2019' ,  '15:20')
  ,"venue":"University of Tasmania Stadium"
  ,"home_team_id":9
  ,"away_team_id":2
},
{
   "id":53
  ,"round_num":6
  ,"datestamp": Time.getTimeStampDMY('28/04/2019' ,  '16:40')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":15
},
{
   "id":54
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('03/05/2019' ,  '19:50')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":3
  ,"away_team_id":12
},
{
   "id":55
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('04/05/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":9
},
{
   "id":56
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('04/05/2019' ,  '13:45')
  ,"venue":"UNSW Canberra Oval"
  ,"home_team_id":8
  ,"away_team_id":14
},
{
   "id":57
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('04/05/2019' ,  '16:35')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":15
},
{
   "id":58
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('04/05/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":13
},
{
   "id":59
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('04/05/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":7
},
{
   "id":60
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('05/05/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":11
},
{
   "id":61
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('05/05/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":6
  ,"away_team_id":4
},
{
   "id":62
  ,"round_num":7
  ,"datestamp": Time.getTimeStampDMY('05/05/2019' ,  '16:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":5
},
{
   "id":63
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('10/05/2019' ,  '19:50')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":4
},
{
   "id":64
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('11/05/2019' ,  '13:45')
  ,"venue":"Mars Stadium"
  ,"home_team_id":16
  ,"away_team_id":1
},
{
   "id":65
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('11/05/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":2
  ,"away_team_id":3
},
{
   "id":66
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('11/05/2019' ,  '16:35')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":10
},
{
   "id":67
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('11/05/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":15
},
{
   "id":68
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('11/05/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":0
},
{
   "id":69
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('12/05/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":6
},
{
   "id":70
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('12/05/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":8
},
{
   "id":71
  ,"round_num":8
  ,"datestamp": Time.getTimeStampDMY('12/05/2019' ,  '17:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":13
},
{
   "id":72
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('17/05/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":10
},
{
   "id":73
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('18/05/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":14
},
{
   "id":74
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('18/05/2019' ,  '14:10')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":0
},
{
   "id":75
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('18/05/2019' ,  '16:35')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":16
},
{
   "id":76
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('18/05/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":5
},
{
   "id":77
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('18/05/2019' ,  '19:25')
  ,"venue":"Blundstone Arena"
  ,"home_team_id":11
  ,"away_team_id":15
},
{
   "id":78
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('19/05/2019' ,  '13:10')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":7
},
{
   "id":79
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('19/05/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":9
},
{
   "id":80
  ,"round_num":9
  ,"datestamp": Time.getTimeStampDMY('19/05/2019' ,  '16:40')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":2
},
{
   "id":81
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('24/05/2019' ,  '19:50')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":3
},
{
   "id":82
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('25/05/2019' ,  '13:45')
  ,"venue":"University of Tasmania Stadium"
  ,"home_team_id":9
  ,"away_team_id":12
},
{
   "id":83
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('25/05/2019' ,  '14:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":11
},
{
   "id":84
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('25/05/2019' ,  '16:35')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":15
},
{
   "id":85
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('25/05/2019' ,  '19:25')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":6
},
{
   "id":86
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('25/05/2019' ,  '19:25')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":4
},
{
   "id":87
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('26/05/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":8
},
{
   "id":88
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('26/05/2019' ,  '15:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":2
},
{
   "id":89
  ,"round_num":10
  ,"datestamp": Time.getTimeStampDMY('26/05/2019' ,  '17:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":1
},
{
   "id":90
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('31/05/2019' ,  '19:50')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":13
},
{
   "id":91
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('01/06/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":5
},
{
   "id":92
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('01/06/2019' ,  '13:45')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":7
},
{
   "id":93
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('01/06/2019' ,  '16:35')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":15
},
{
   "id":94
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('01/06/2019' ,  '19:25')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":9
},
{
   "id":95
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('01/06/2019' ,  '19:40')
  ,"venue":"TIO Stadium"
  ,"home_team_id":10
  ,"away_team_id":0
},
{
   "id":96
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('02/06/2019' ,  '14:40')
  ,"venue":"Adelaide Arena at Jiangwan Stadium"
  ,"home_team_id":14
  ,"away_team_id":12
},
{
   "id":97
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('02/06/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":4
  ,"away_team_id":2
},
{
   "id":98
  ,"round_num":11
  ,"datestamp": Time.getTimeStampDMY('02/06/2019' ,  '17:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":16
},
{
   "id":99
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('07/06/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":6
},
{
   "id":100
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('08/06/2019' ,  '13:45')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":1
},
{
   "id":101
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('08/06/2019' ,  '16:35')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":11
},
{
   "id":102
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('08/06/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":8
},
{
   "id":103
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('09/06/2019' ,  '15:20')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":15
},
{
   "id":104
  ,"round_num":12
  ,"datestamp": Time.getTimeStampDMY('10/06/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":10
},
{
   "id":105
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('13/06/2019' ,  '19:50')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":13
},
{
   "id":106
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('14/06/2019' ,  '19:50')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":9
},
{
   "id":107
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('15/06/2019' ,  '13:45')
  ,"venue":"Riverway Stadium"
  ,"home_team_id":7
  ,"away_team_id":14
},
{
   "id":108
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('15/06/2019' ,  '16:35')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":12
},
{
   "id":109
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('15/06/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":16
},
{
   "id":110
  ,"round_num":13
  ,"datestamp": Time.getTimeStampDMY('16/06/2019' ,  '15:20')
  ,"venue":"Blundstone Arena"
  ,"home_team_id":11
  ,"away_team_id":8
},
{
   "id":111
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('20/06/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":4
},
{
   "id":112
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('21/06/2019' ,  '19:50')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":9
},
{
   "id":113
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('22/06/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":5
},
{
   "id":114
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('22/06/2019' ,  '16:35')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":1
},
{
   "id":115
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('22/06/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":6
},
{
   "id":116
  ,"round_num":14
  ,"datestamp": Time.getTimeStampDMY('23/06/2019' ,  '15:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":3
},
{
   "id":117
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('27/06/2019' ,  '19:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":8
},
{
   "id":118
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('28/06/2019' ,  '19:50')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":0
},
{
   "id":119
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('29/06/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":15
},
{
   "id":120
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('29/06/2019' ,  '16:35')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":7
},
{
   "id":121
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('29/06/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":3
  ,"away_team_id":11
},
{
   "id":122
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('29/06/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":16
},
{
   "id":123
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('30/06/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":13
},
{
   "id":124
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('30/06/2019' ,  '15:20')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":10
},
{
   "id":125
  ,"round_num":15
  ,"datestamp": Time.getTimeStampDMY('30/06/2019' ,  '17:20')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":2
},
{
   "id":126
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('05/07/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":9
  ,"away_team_id":3
},
{
   "id":127
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('06/07/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":4
  ,"away_team_id":15
},
{
   "id":128
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('06/07/2019' ,  '14:10')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":13
},
{
   "id":129
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('06/07/2019' ,  '16:35')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":12
},
{
   "id":130
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('06/07/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":6
},
{
   "id":131
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('06/07/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":15
},
{
   "id":132
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('07/07/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":2
  ,"away_team_id":10
},
{
   "id":133
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('07/07/2019' ,  '15:20')
  ,"venue":"Blundstone Arena"
  ,"home_team_id":11
  ,"away_team_id":14
},
{
   "id":134
  ,"round_num":16
  ,"datestamp": Time.getTimeStampDMY('07/07/2019' ,  '16:40')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":1
},
{
   "id":135
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('12/07/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":3
},
{
   "id":136
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('13/07/2019' ,  '13:45')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":2
},
{
   "id":137
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('13/07/2019' ,  '14:10')
  ,"venue":"University of Tasmania Stadium"
  ,"home_team_id":9
  ,"away_team_id":5
},
{
   "id":138
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('13/07/2019' ,  '16:35')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":11
},
{
   "id":139
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('13/07/2019' ,  '19:25')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":0
},
{
   "id":140
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('13/07/2019' ,  '19:25')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":14
},
{
   "id":141
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('14/07/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":8
},
{
   "id":142
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('14/07/2019' ,  '15:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":10
},
{
   "id":143
  ,"round_num":17
  ,"datestamp": Time.getTimeStampDMY('14/07/2019' ,  '16:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":1
},
{
   "id":144
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('19/07/2019' ,  '19:50')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":4
},
{
   "id":145
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('20/07/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":12
},
{
   "id":146
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('20/07/2019' ,  '14:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":7
},
{
   "id":147
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('20/07/2019' ,  '16:35')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":3
},
{
   "id":148
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('20/07/2019' ,  '19:25')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":11
},
{
   "id":149
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('20/07/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":15
},
{
   "id":150
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('21/07/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":6
  ,"away_team_id":9
},
{
   "id":151
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('21/07/2019' ,  '15:20')
  ,"venue":"TIO Traeger Park"
  ,"home_team_id":10
  ,"away_team_id":15
},
{
   "id":152
  ,"round_num":18
  ,"datestamp": Time.getTimeStampDMY('21/07/2019' ,  '16:40')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":16
},
{
   "id":153
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('26/07/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":13
},
{
   "id":154
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('27/07/2019' ,  '13:45')
  ,"venue":"University of Tasmania Stadium"
  ,"home_team_id":9
  ,"away_team_id":1
},
{
   "id":155
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('27/07/2019' ,  '14:10')
  ,"venue":"MCG"
  ,"home_team_id":2
  ,"away_team_id":0
},
{
   "id":156
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('27/07/2019' ,  '16:35')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":11
},
{
   "id":157
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('27/07/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":10
},
{
   "id":158
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('27/07/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":8
},
{
   "id":159
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('28/07/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":16
  ,"away_team_id":5
},
{
   "id":160
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('28/07/2019' ,  '15:20')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":6
},
{
   "id":161
  ,"round_num":19
  ,"datestamp": Time.getTimeStampDMY('28/07/2019' ,  '16:40')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":4
},
{
   "id":162
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('02/08/2019' ,  '19:50')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":9
},
{
   "id":163
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('03/08/2019' ,  '13:45')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":12
},
{
   "id":164
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('03/08/2019' ,  '14:10')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":15
},
{
   "id":165
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('03/08/2019' ,  '16:35')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":6
},
{
   "id":166
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('03/08/2019' ,  '19:25')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":13
},
{
   "id":167
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('03/08/2019' ,  '19:40')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":14
},
{
   "id":168
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('04/08/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":7
},
{
   "id":169
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('04/08/2019' ,  '15:20')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":2
  ,"away_team_id":15
},
{
   "id":170
  ,"round_num":20
  ,"datestamp": Time.getTimeStampDMY('04/08/2019' ,  '16:40')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":16
},
{
   "id":171
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('09/08/2019' ,  '19:50')
  ,"venue":"UNSW Canberra Oval"
  ,"home_team_id":8
  ,"away_team_id":9
},
{
   "id":172
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('10/08/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":3
},
{
   "id":173
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('10/08/2019' ,  '14:10')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":15
},
{
   "id":174
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('10/08/2019' ,  '16:35')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":7
},
{
   "id":175
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('10/08/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":4
  ,"away_team_id":16
},
{
   "id":176
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('10/08/2019' ,  '19:25')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":11
},
{
   "id":177
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('11/08/2019' ,  '13:10')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":14
  ,"away_team_id":5
},
{
   "id":178
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('11/08/2019' ,  '15:20')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":2
},
{
   "id":179
  ,"round_num":21
  ,"datestamp": Time.getTimeStampDMY('11/08/2019' ,  '16:40')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":0
},
{
   "id":180
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('16/08/2019' ,  '19:50')
  ,"venue":"MCG"
  ,"home_team_id":10
  ,"away_team_id":15
},
{
   "id":181
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('17/08/2019' ,  '13:45')
  ,"venue":"MCG"
  ,"home_team_id":2
  ,"away_team_id":14
},
{
   "id":182
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('17/08/2019' ,  '14:10')
  ,"venue":"Gabba"
  ,"home_team_id":1
  ,"away_team_id":6
},
{
   "id":183
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('17/08/2019' ,  '16:35')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":0
  ,"away_team_id":3
},
{
   "id":184
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('17/08/2019' ,  '19:25')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":11
  ,"away_team_id":12
},
{
   "id":185
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('17/08/2019' ,  '20:10')
  ,"venue":"Optus Stadium"
  ,"home_team_id":5
  ,"away_team_id":4
},
{
   "id":186
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('18/08/2019' ,  '13:10')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":15
},
{
   "id":187
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('18/08/2019' ,  '15:20')
  ,"venue":"Sydney Showground Stadium"
  ,"home_team_id":8
  ,"away_team_id":16
},
{
   "id":188
  ,"round_num":22
  ,"datestamp": Time.getTimeStampDMY('18/08/2019' ,  '16:40')
  ,"venue":"Marvel Stadium"
  ,"home_team_id":9
  ,"away_team_id":7
},
{
   "id":189
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('24/08/2019' ,  '00:00')
  ,"venue":"Blundstone Arena"
  ,"home_team_id":11
  ,"away_team_id":10
},
{
   "id":190
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('24/08/2019' ,  '00:00')
  ,"venue":"MCG"
  ,"home_team_id":13
  ,"away_team_id":1
},
{
   "id":191
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('24/08/2019' ,  '00:00')
  ,"venue":"Metricon Stadium"
  ,"home_team_id":7
  ,"away_team_id":8
},
{
   "id":192
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('24/08/2019' ,  '00:30')
  ,"venue":"Adelaide Oval"
  ,"home_team_id":12
  ,"away_team_id":5
},
{
   "id":193
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('24/08/2019' ,  '02:00')
  ,"venue":"Optus Stadium"
  ,"home_team_id":15
  ,"away_team_id":9
},
{
   "id":194
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('25/08/2019' ,  '00:00')
  ,"venue":"GMHBA Stadium"
  ,"home_team_id":6
  ,"away_team_id":2
},
{
   "id":195
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('25/08/2019' ,  '00:00')
  ,"venue":"Mars Stadium"
  ,"home_team_id":16
  ,"away_team_id":0
},
{
   "id":196
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('25/08/2019' ,  '00:00')
  ,"venue":"MCG"
  ,"home_team_id":3
  ,"away_team_id":4
},
{
   "id":197
  ,"round_num":23
  ,"datestamp": Time.getTimeStampDMY('25/08/2019' ,  '00:00')
  ,"venue":"SCG"
  ,"home_team_id":15
  ,"away_team_id":14
}



];

// console.log("Games:", games);


var gamesRef = db.ref('/season-2019-games');
//
gamesRef.set(games, function(error) {
  if (error) {
    console.log("Games data could not be saved.", error);
  }
  else {
    console.log("Games data saved successfully."); /*ref.once("value", function(snapshot) {
  console.log(snapshot.val()); }); */
  }
});
//
// ref.once("value", function(snapshot) {
//   console.log('Finish...', snapshot.val());
// });
