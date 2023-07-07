import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWfR6z44JFraaUo1YcObwbP6rv0O6_i80",
  authDomain: "teamaker-49686.firebaseapp.com",
  databaseURL: "https://teamaker-49686-default-rtdb.firebaseio.com",
  projectId: "teamaker-49686",
  storageBucket: "teamaker-49686.appspot.com",
  messagingSenderId: "421820024700",
  appId: "1:421820024700:web:b83bed23155d3de60446f9",
  measurementId: "G-P9YM9QDE28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
