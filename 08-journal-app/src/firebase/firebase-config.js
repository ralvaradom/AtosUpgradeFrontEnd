import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyD2E6MQ6jIqfNE_CojvAWBBjm1CM5MJk1w",
	authDomain: "react-journal-app-f6393.firebaseapp.com",
	projectId: "react-journal-app-f6393",
	storageBucket: "react-journal-app-f6393.appspot.com",
	messagingSenderId: "320475995130",
	appId: "1:320475995130:web:62586b4fec86deb3e4e243"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase
}