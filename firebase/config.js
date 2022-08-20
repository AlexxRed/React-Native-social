// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyBMwssCFbwU5hxuvDQpaO2BLgxRXQRHtsY",
//     authDomain: "rn-social-24a91.firebaseapp.com",
//     projectId: "rn-social-24a91",
//     storageBucket: "rn-social-24a91.appspot.com",
//     messagingSenderId: "133253918667",
//     appId: "1:133253918667:web:79c0a537f689087cef904e"
//   };
  
//   // Initialize Firebase
//   const firebaseApp = firebase.initializeApp(firebaseConfig);

// //   firebase.initializeApp(firebaseConfig);

//   export default firebaseApp;

  import * as firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBMwssCFbwU5hxuvDQpaO2BLgxRXQRHtsY",
    authDomain: "rn-social-24a91.firebaseapp.com",
    projectId: "rn-social-24a91",
    storageBucket: "rn-social-24a91.appspot.com",
    messagingSenderId: "133253918667",
    appId: "1:133253918667:web:79c0a537f689087cef904e"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);