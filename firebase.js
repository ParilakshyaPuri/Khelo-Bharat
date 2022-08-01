// const fb = require("firebase");

// const appIni = fb.initializeApp({
//   apiKey: "AIzaSyB1lxRVT4SnBFLSwgyOSFdptfPKoEnGogM",
//   authDomain: "trial1-e43b4.firebaseapp.com",
//   projectId: "trial1-e43b4",
//   storageBucket: "trial1-e43b4.appspot.com",
//   messagingSenderId: "116115597338",
//   appId: "1:116115597338:web:15b2c89379be9c23ac49a3",
// });

// let fbdb = fb.database();

// fbdb.ref("theText").set("caught string");

// ----------------

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-LvJqGOqfR8Xw5c6OJyhoSrQ31UG9Xn4",
  authDomain: "khelo-india-e05c9.firebaseapp.com",
  databaseURL: "https://khelo-india-e05c9-default-rtdb.firebaseio.com",
  projectId: "khelo-india-e05c9",
  storageBucket: "khelo-india-e05c9.appspot.com",
  messagingSenderId: "653705825926",
  appId: "1:653705825926:web:90efd328bf10f1fcea0b07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
