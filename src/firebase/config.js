import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCrj5c7fw2Dqh6PfUQQapCo1h8AdtJt8oI",
    authDomain: "udemy-vue-firebase-sites-cb162.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-cb162",
    storageBucket: "udemy-vue-firebase-sites-cb162.appspot.com",
    messagingSenderId: "1087496817442",
    appId: "1:1087496817442:web:0daf4d1f02c6305e61337b"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore=firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore,timestamp}
