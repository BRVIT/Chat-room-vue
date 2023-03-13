import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0TFyb2kjhyV1dZkorW67sd8_qkdsadyE",

  authDomain: "live-chat-a83e2.firebaseapp.com",

  projectId: "live-chat-a83e2",

  storageBucket: "live-chat-a83e2.appspot.com",

  messagingSenderId: "854775187193",

  appId: "1:854775187193:web:3c5898fe5c8d2a92594428",

  measurementId: "G-57GLKYBR2C",
};

// init firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
