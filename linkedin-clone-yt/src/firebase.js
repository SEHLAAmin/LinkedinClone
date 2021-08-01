import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnJRVwZQvWsnpKy1SqbVNbxL9AZZcptIo",
    authDomain: "linkedin-clone-yt-2ca48.firebaseapp.com",
    projectId: "linkedin-clone-yt-2ca48",
    storageBucket: "linkedin-clone-yt-2ca48.appspot.com",
    messagingSenderId: "823263506939",
    appId: "1:823263506939:web:4fe371df63f3310a535b5e",
    measurementId: "G-9NSND6PL4R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };