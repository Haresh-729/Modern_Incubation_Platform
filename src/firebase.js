import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz92ZvrJN2ccggAXe0jHhm6XAHvbQYKmY",
  authDomain: "auth-dev-d82a8.firebaseapp.com",
  projectId: "auth-dev-d82a8",
  storageBucket: "auth-dev-d82a8.appspot.com",
  messagingSenderId: "912897498657",
  appId: "1:912897498657:web:1385de330b29f18e8acd60",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, app, db, storage };
