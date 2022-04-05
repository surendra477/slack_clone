// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7Vh6x3PsCRKZBJ6kRJD63He6LdxSqymk",
    authDomain: "slacksurendra.firebaseapp.com",
    projectId: "slacksurendra",
    storageBucket: "slacksurendra.appspot.com",
    messagingSenderId: "735911646849",
    appId: "1:735911646849:web:3fd3f6e6a4bd8942fd5f80",
    measurementId: "G-DY8TSQ3PMJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()

  const db = firebaseApp.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db}