import * as Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
 // Replace this with your own config details
const config = {
    apiKey: "AIzaSyDZaQyglSXVTJSjkf9SuCc-UroTXxRq6Gw",
    authDomain: "messanger-ecad1.firebaseapp.com",
    databaseURL: "https://messanger-ecad1.firebaseio.com",
    messagingSenderId: "880022082809",
    projectId: "messanger-ecad1",
    storageBucket: "messanger-ecad1.appspot.com"
};
Firebase.initializeApp(config);
export const firestore = Firebase.firestore()
export const auth = Firebase.auth()
export const firebase = Firebase