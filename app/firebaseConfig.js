import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6hzwNre2kMIKu2cOT4nrbYirJ75Kd-c0",
  authDomain: "abu-edushare.firebaseapp.com",
  projectId: "abu-edushare",
  storageBucket: "abu-edushare.appspot.com",
  messagingSenderId: "869127330691",
  appId: "1:869127330691:web:6e108f6438d2c6f1dc34b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
