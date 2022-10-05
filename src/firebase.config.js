// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNcp0c_4quG3jAcp7zx8VpIUnOzbkmrcs",
  authDomain: "house-marketplace-app-1fb30.firebaseapp.com",
  projectId: "house-marketplace-app-1fb30",
  storageBucket: "house-marketplace-app-1fb30.appspot.com",
  messagingSenderId: "967771751984",
  appId: "1:967771751984:web:1cb525b29078ba8c184ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();