import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT1M-nRob0_-YelwuDY39BHUyQy8dw4Bk",
  authDomain: "this-83be4.firebaseapp.com",
  projectId: "this-83be4",
  storageBucket: "this-83be4.appspot.com",
  messagingSenderId: "867400729393",
  appId: "1:867400729393:web:109ec603e35e07dc9ce610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getIfirestoreApp = () => {
    return app
}