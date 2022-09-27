// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsn4vZ9hOdoWiu6asSMJy41OiflKpDBro",
  authDomain: "polysemes-6e7d1.firebaseapp.com",
  projectId: "polysemes-6e7d1",
  storageBucket: "polysemes-6e7d1.appspot.com",
  messagingSenderId: "17853995064",
  appId: "1:17853995064:web:abfdc5665b1615f7332ecd",
  measurementId: "G-GVQ7KEHQJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);