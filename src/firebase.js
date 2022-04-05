// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "slacksurendra.firebaseapp.com",
    projectId: "slacksurendra",
    storageBucket: "slacksurendra.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()

  const db = firebaseApp.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db}
