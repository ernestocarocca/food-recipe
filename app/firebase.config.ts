// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAygfq26-9sIv0Ke_YMdCCaxOYzLzGMvZc",
    authDomain: "recipesforfood-f2b84.firebaseapp.com",
    projectId: "recipesforfood-f2b84",
    storageBucket: "recipesforfood-f2b84.appspot.com",
    messagingSenderId: "149886468885",
    appId: "1:149886468885:web:5be262036d3b2e7acc5f1c"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth();
export { app, auth };