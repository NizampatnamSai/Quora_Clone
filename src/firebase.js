import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8xsQiHy4rCQnNZ914P-wWuhnayppGbuo",
  authDomain: "quora-clone-7f246.firebaseapp.com",
  projectId: "quora-clone-7f246",
  storageBucket: "quora-clone-7f246.appspot.com",
  messagingSenderId: "118127471731",
  appId: "1:118127471731:web:d3b7a74a4487373f010e06",
  measurementId: "G-5PB3XVXSF1"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
const providerfb=new firebase.auth.FacebookAuthProvider()

const db=firebaseApp.firestore()

export {auth, provider,providerfb,db}
// export default db;