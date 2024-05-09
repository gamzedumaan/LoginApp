import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDLNvX2_gix3JvsARq6xry2JncQfg38D4g',
  authDomain: 'auth-c0e26.firebaseapp.com',
  projectId: 'auth-c0e26',
  storageBucket: 'auth-c0e26.appspot.com',
  messagingSenderId: '432529019651',
  appId: '1:432529019651:web:fa8d1b27de09abed8f4f36',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
