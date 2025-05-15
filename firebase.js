// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.emv.apiKey,
  authDomain: process.emv.authDomain,
  projectId: process.emv.projectId,
  storageBucket: process.emv.storageBucket,
  messagingSenderId: process.emv.messagingSenderId,
  appId: process.emv.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);