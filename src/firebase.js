import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "CONFIGURE",
  authDomain: "CONFIGURE",
  databaseURL: "CONFIGURE",
  projectId: "CONFIGURE",
  storageBucket: "CONFIGURE",
  messagingSenderId: "CONFIGURE",
  appId: "CONFIGURE",
  measurementId: "CONFIGURE",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
