require('dotenv').config();
require('firebase/firestore');
const firebase = require('firebase');



const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();





module.exports = {db, firebase};