// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx02FTEEFSD0irS79Ku6EjRtyz5JVCWq4",
  authDomain: "insta-clone-9faf0.firebaseapp.com",
  projectId: "insta-clone-9faf0",
  storageBucket: "insta-clone-9faf0.appspot.com",
  messagingSenderId: "699428836176",
  appId: "1:699428836176:web:765b4eaed7284e3a959255"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export {db, storage};