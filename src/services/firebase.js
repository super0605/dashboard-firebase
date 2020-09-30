import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCfMxUjXgM5t2ogzJV2zLfBJwTeVr00iCs",
  authDomain: "nextgatetechtest-26090.firebaseapp.com",
  databaseURL: "https://nextgatetechtest-26090.firebaseio.com",
  projectId: "nextgatetechtest-26090",
  storageBucket: "nextgatetechtest-26090.appspot.com",
  messagingSenderId: "725828408121",
  appId: "1:725828408121:web:a6a04df979d1d9abc30ee8",
  measurementId: "G-S6NXY3ECQT",
};

firebase.initializeApp(config);

export default firebase.database();
