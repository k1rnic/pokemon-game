import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

const fire = firebase;
const databaseRef = fire.database().ref();

export default databaseRef;
