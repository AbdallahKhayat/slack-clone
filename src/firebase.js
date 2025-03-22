import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSAzDN1CbpjbQDbEkcVERKq_MwR8sizdE",
  authDomain: "slack-clone-a33af.firebaseapp.com",
  projectId: "slack-clone-a33af",
  storageBucket: "slack-clone-a33af.firebasestorage.app",
  messagingSenderId: "610285357011",
  appId: "1:610285357011:web:38464a8b37d019d04d5126",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
