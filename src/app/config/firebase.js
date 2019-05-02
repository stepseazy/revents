import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBkNdfJSxdqhFqTaj1jA0BxK2A2je5lQNE",
    authDomain: "revents-16fec.firebaseapp.com",
    databaseURL: "https://revents-16fec.firebaseio.com",
    projectId: "revents-16fec",
    storageBucket: "revents-16fec.appspot.com",
    messagingSenderId: "479593407771"
}

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export default firebase