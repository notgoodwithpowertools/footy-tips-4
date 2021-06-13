import firebase from 'firebase';

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("authDomain", process.env.REACT_APP_AUTH_DOMAIN);

// // for li-tips
// const config = {
//   apiKey: "AIzaSyCsy7aCE6B29aKXZKm5tfLd8mAq8RDHzSs",
//   authDomain: "li-tips.firebaseapp.com",
//   projectId: "li-tips",
//   storageBucket: "li-tips.appspot.com",
//   messagingSenderId: "1029483063888",
//   appId: "1:1029483063888:web:0799bd8af3055a17fe3f55",
//   measurementId: "G-BK8FV2LDJP"
// };

// for footy tips
var config = {
  apiKey: 'AIzaSyAAiEJppMmrMwe32hA9qNKial-cqJOhk9c',
  authDomain: 'footytips-prod.firebaseapp.com',
  databaseURL: 'https://footytips-prod.firebaseio.com',
  storageBucket: 'footytips-prod.appspot.com',
  messagingSenderId: '688108608555'
}

try {

  console.log("Firebase config:", config);
  firebase.initializeApp(config);

} catch (e) {

}

// export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export var firebaseStorageRef = firebase.storage().ref();
export default firebase;
