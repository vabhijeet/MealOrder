import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyD4Lf2wLD3cHNSibLk8jXBu5Wibmv90n64",
    authDomain: "mychat-257e8.firebaseapp.com",
    projectId: "mychat-257e8",
    storageBucket: "mychat-257e8.appspot.com",
    messagingSenderId: "686209169697",
    appId: "1:686209169697:web:bc22aeededf4edf1de2660"
  }).auth();