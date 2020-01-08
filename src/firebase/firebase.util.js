import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyB26-F7kionbHpLHDZxyGFz61JjBDIJ0Vs",
    authDomain: "reactonlineshopping.firebaseapp.com",
    databaseURL: "https://reactonlineshopping.firebaseio.com",
    projectId: "reactonlineshopping",
    storageBucket: "reactonlineshopping.appspot.com",
    messagingSenderId: "763032965065",
    appId: "1:763032965065:web:1ecb21c9bce754d2822218",
    measurementId: "G-X05FMS9QDR"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase;
