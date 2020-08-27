import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyBf_wnrwZ9rJlDHq6pGpD5YA8z8NxDgwi8',
  authDomain: 'appfinancas-3ef62.firebaseapp.com',
  databaseURL: 'https://appfinancas-3ef62.firebaseio.com',
  projectId: 'appfinancas-3ef62',
  storageBucket: 'appfinancas-3ef62.appspot.com',
  messagingSenderId: '930182871368',
  appId: '1:930182871368:web:8eed4ed0efb187e6cf5b7d',
  measurementId: 'G-WXQD0DEJZ3',
};
// Initialize Firebase
if (!firebase.apps.length) {
  //abrir minha conexão
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
