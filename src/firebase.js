import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1xXAWD57Q93x24TQSqcxh7Q9NxShKyfA",
  authDomain: "chat-67d18.firebaseapp.com",
  projectId: "chat-67d18",
  storageBucket: "chat-67d18.appspot.com",
  messagingSenderId: "341687704992",
  appId: "1:341687704992:web:a5e90bb378ec19f7ab58c5",
  measurementId: "G-HB3E4QHJ7N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);
