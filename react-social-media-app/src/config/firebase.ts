// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZwON7uXJdLq400m2dX7coQaMG17sW5wI",
  authDomain: "my-react-social-app.firebaseapp.com",
  projectId: "my-react-social-app",
  storageBucket: "my-react-social-app.appspot.com",
  messagingSenderId: "379629864776",
  appId: "1:379629864776:web:df420b19b675f842c0157d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
