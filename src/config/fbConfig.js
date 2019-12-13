import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDoTVVbiBR7f1pO0DM8CVDMTo65hFRkrpM",
    authDomain: "net-ninja-marioplan-2d552.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-2d552.firebaseio.com",
    projectId: "net-ninja-marioplan-2d552",
    storageBucket: "net-ninja-marioplan-2d552.appspot.com",
    messagingSenderId: "677088980962",
    appId: "1:677088980962:web:1ec932c2a89fdb005813bb",
    measurementId: "G-NMWRZXDHHL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  // Initialize firestore / so that the console doesn't complain about 'the update'
  //firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;