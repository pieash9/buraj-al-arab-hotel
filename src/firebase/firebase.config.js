// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdg3KxZNA9X4yMHJ08xzn0sUIODPvGt8o",
  authDomain: "burj-al-arab-a744a.firebaseapp.com",
  projectId: "burj-al-arab-a744a",
  storageBucket: "burj-al-arab-a744a.appspot.com",
  messagingSenderId: "528929849256",
  appId: "1:528929849256:web:e36b8a68fa10187088e79d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}