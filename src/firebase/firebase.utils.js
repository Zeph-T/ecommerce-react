import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyA_VDD6CYwMgk7kabkRH6UEbuHWyw9zbww",
    authDomain: "react-db-f0b5c.firebaseapp.com",
    projectId: "react-db-f0b5c",
    storageBucket: "react-db-f0b5c.appspot.com",
    messagingSenderId: "560691259839",
    appId: "1:560691259839:web:5a180e6625f933a533d90a",
    measurementId: "G-84CQM31GEW"
  };


firebase.initializeApp(config);


export const auth=firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;