// Firebase app initialization
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmrTBVkpl0b0bkz7KGsu7rMBnIsn-HFf0",
  authDomain: "cad1-da710.firebaseapp.com",
  projectId: "cad1-da710",
  storageBucket: "cad1-da710.firebasestorage.app",
  messagingSenderId: "436600723987",
  appId: "1:436600723987:web:3a11e09ee3983b32dd3de6",
  measurementId: "G-EN043H1FE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
