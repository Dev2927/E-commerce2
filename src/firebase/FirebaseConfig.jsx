import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqCYyUOOFYgIs1lc6CzlHbEF66GLRjZRk",
  authDomain: "myfirstapp-f835d.firebaseapp.com",
  projectId: "myfirstapp-f835d",
  storageBucket: "myfirstapp-f835d.appspot.com",
  messagingSenderId: "351676839328",
  appId: "1:351676839328:web:c9aa61de237f54f997e0c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
