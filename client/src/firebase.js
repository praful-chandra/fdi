import  firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDavoSPQsTaEt8qJtC-2GKNpAp5aWujj70",
    authDomain: "fairdeal-international.firebaseapp.com",
    databaseURL: "https://fairdeal-international.firebaseio.com",
    projectId: "fairdeal-international",
    storageBucket: "fairdeal-international.appspot.com",
    messagingSenderId: "270683153660",
    appId: "1:270683153660:web:add72ec1c78638671aa379"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const firebaseObj = firebase;
