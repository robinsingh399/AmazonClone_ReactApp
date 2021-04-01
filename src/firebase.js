import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA-DR73sUNxAIhFMg7wxtkfk63vUb5irRQ",
  authDomain: "challenge-40fdd.firebaseapp.com",
  projectId: "challenge-40fdd",
  storageBucket: "challenge-40fdd.appspot.com",
  messagingSenderId: "574863821226",
  appId: "1:574863821226:web:04de357979f57370bd83d3",
  measurementId: "G-2ZBF1E3K7M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };