import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDuhC6_g4gyJMiUTA2o_L7ghMNq3qEOA1c",
    authDomain: "team-calendar-34e1d.firebaseapp.com",
    projectId: "team-calendar-34e1d",
    storageBucket: "team-calendar-34e1d.appspot.com",
    messagingSenderId: "193671148096",
    appId: "1:193671148096:web:810063e47a52ff58d165a5"
};


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();