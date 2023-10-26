// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXv5XMiYHYd53kO53n1dGxd2SMERxzvWo",
  authDomain: "activity-generator-dceb0.firebaseapp.com",
  databaseURL: "https://activity-generator-dceb0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "activity-generator-dceb0",
  storageBucket: "activity-generator-dceb0.appspot.com",
  messagingSenderId: "896878276557",
  appId: "1:896878276557:web:6a682abbd5c4c0fb3dde84",
  measurementId: "G-0Z00E3JQ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };