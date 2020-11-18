import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBtSsfXdcJ4rpyKE_EA9WTAM9fOx_OCvng",
  authDomain: "pwa-expense-tracker-ec59b.firebaseapp.com",
  databaseURL: "https://pwa-expense-tracker-ec59b.firebaseio.com",
  projectId: "pwa-expense-tracker-ec59b",
  storageBucket: "pwa-expense-tracker-ec59b.appspot.com",
  messagingSenderId: "126055468483",
  appId: "1:126055468483:web:d33583e1ff438d4f364176",
  measurementId: "G-ZX98Y8DNJ8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
