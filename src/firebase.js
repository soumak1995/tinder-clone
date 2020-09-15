import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyD1IqbW_o6D_kT3K3KS4ai5zNT2PDJUe5I",
    authDomain: "tinder-clone-33512.firebaseapp.com",
    databaseURL: "https://tinder-clone-33512.firebaseio.com",
    projectId: "tinder-clone-33512",
    storageBucket: "tinder-clone-33512.appspot.com",
    messagingSenderId: "540711919826",
    appId: "1:540711919826:web:e5bc9ba6e345a12a72cd0b",
    measurementId: "G-Y65LN7J70D"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const database=firebase.firestore();
  export default database;