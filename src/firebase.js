// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH2KjHfD65KiSvYWslxo_huj86Gos87iQ",
  authDomain: "acamica-react.firebaseapp.com",
  projectId: "acamica-react",
  storageBucket: "acamica-react.appspot.com",
  messagingSenderId: "274597079754",
  appId: "1:274597079754:web:8b5ae18be86c43ec73e233",
  measurementId: "G-BQW9RFPE5L"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;