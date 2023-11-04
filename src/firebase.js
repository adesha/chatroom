import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBZlfes9re7IV6-QkJqM9Ek0hEwD9TO0Ls",
  authDomain: "firechat-31a23.firebaseapp.com",
  projectId: "firechat-31a23",
  storageBucket: "firechat-31a23.appspot.com",
  messagingSenderId: "342047289285",
  appId: "1:342047289285:web:842cd7ca6f9ebf123da5ac",
  measurementId: "G-S2ZKCC22LG"
})

const db=firebaseApp.firestore()

const auth=firebase.auth()

export {db,auth}