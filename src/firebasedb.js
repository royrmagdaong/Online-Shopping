import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-storage'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyD7jI6vZYH8J6vlYAwmjOMFHQ_pfsb8Bkg",
    authDomain: "sampleonlineshopping.firebaseapp.com",
    databaseURL: "https://sampleonlineshopping.firebaseio.com",
    projectId: "sampleonlineshopping",
    storageBucket: "sampleonlineshopping.appspot.com",
    messagingSenderId: "954116363396",
    appId: "1:954116363396:web:0105d0c50cd2977c6a5ed1",
    measurementId: "G-8DWZ5PWHH9"
   })

   export const dbStorage = db.storage();
