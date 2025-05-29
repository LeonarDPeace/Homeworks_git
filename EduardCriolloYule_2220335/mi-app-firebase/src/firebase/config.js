import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsOmaIeOw8YF1Z_sfITOpYSq0YIa2Pa6I",
  authDomain: "fir-challenge-62b08.firebaseapp.com",
  projectId: "fir-challenge-62b08",
  storageBucket: "fir-challenge-62b08.firebasestorage.app",
  messagingSenderId: "285796358361",
  appId: "1:285796358361:web:93b17dafc680840d6c46c8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();