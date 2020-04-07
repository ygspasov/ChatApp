import firebase from "firebase";
// import firestore from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOdVLZe7N0WOYFYwMrOw9D_CUGc3YWPOA",
  authDomain: "chat-cd4ab.firebaseapp.com",
  databaseURL: "https://chat-cd4ab.firebaseio.com",
  projectId: "chat-cd4ab",
  storageBucket: "chat-cd4ab.appspot.com",
  messagingSenderId: "1084369635098",
  appId: "1:1084369635098:web:295b5b2551263b07b88ea3",
};
const db = firebase.initializeApp(firebaseConfig);
// db.firestore().settings({ timestampsInSnapshots: true });
export default db.firestore();
