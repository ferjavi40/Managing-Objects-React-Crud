import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAoBGSTF8t54KIQRsS7XNLfQyJi6eSL5dU",
    authDomain: "manage-crud-react.firebaseapp.com",
    projectId: "manage-crud-react",
    storageBucket: "manage-crud-react.appspot.com",
    messagingSenderId: "278031926646",
    appId: "1:278031926646:web:5e723d9cf137dcfe736657"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

