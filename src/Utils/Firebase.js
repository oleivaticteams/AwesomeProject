import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAvmoociHhLRffWxQiL7ghC0YT0lREQAM",
  authDomain: "retomiprimerapp.firebaseapp.com",
  databaseURL: "https://retomiprimerapp.firebaseio.com",
  projectId: "retomiprimerapp",
  storageBucket: "retomiprimerapp.appspot.com",
  messagingSenderId: "210441647616",
  appId: "1:210441647616:web:7ad2936d0de99d4b748ae5",
};
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
