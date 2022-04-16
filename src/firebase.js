import { initializeApp, deleteApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsibJX8clU1CtNbuBrkQmLJM0XAzDKPOo",
  authDomain: "bfme-elo.firebaseapp.com",
  projectId: "bfme-elo",
  storageBucket: "bfme-elo.appspot.com",
  messagingSenderId: "587339478118",
  appId: "1:587339478118:web:3979feb706f0b4ced269a7"
};

let app = null;

// Initialize Firebase
export const initializeFirebase = () => {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized");
};

// Export the created app
export const getApp = () => app;

// Terminate Firebase
export const terminateFirebase = () => {
  return deleteApp(app);
}
