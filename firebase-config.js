import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyALvrp4H1Q-eNdUvh9t1_pvFkHOzOEGa-g",
  authDomain: "barber-app-372312.firebaseapp.com",
  projectId: "barber-app-372312",
  storageBucket: "barber-app-372312.appspot.com",
  messagingSenderId: "882021639982",
  appId: "1:882021639982:web:9c25ad96a81a748b107cbf",
  measurementId: "G-5VGDC5V28J"
};

if (!firebase.apps. length){
  firebase.initializeApp(firebaseConfig)
}
// export const db = getFirestore(app)
export { firebase}

