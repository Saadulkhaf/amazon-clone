import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2sXI5R2BC8Mwq9yebi6HHz6vbU5_48bo",
  authDomain: "clone-53614.firebaseapp.com",
  projectId: "clone-53614",
  storageBucket: "clone-53614.appspot.com",
  messagingSenderId: "3005798073",
  appId: "1:3005798073:web:266379777e9a877480ad68",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
