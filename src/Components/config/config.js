
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWfR6z44JFraaUo1YcObwbP6rv0O6_i80",
  authDomain: "teamaker-49686.firebaseapp.com",
  databaseURL: "https://teamaker-49686-default-rtdb.firebaseio.com",
  projectId: "teamaker-49686",
  storageBucket: "teamaker-49686.appspot.com",
  messagingSenderId: "421820024700",
  appId: "1:421820024700:web:a881eba0c6cd8c890446f9",
  measurementId: "G-EZZV5NWQJV"
};


const app = initializeApp(firebaseConfig);

const db =app.firestore();
// const analytics = getAnalytics(app);
export {db};