import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAntT5YiXIreb8cw5C9YXFx7PHo9NBsrTk",
  authDomain: "final-project-5d3d6.firebaseapp.com",
  databaseURL: "https://final-project-5d3d6-default-rtdb.firebaseio.com",
  projectId: "final-project-5d3d6",
  storageBucket: "final-project-5d3d6.appspot.com",
  messagingSenderId: "115448496155",
  appId: "1:115448496155:web:73111052a129dbdb5bb8be",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
