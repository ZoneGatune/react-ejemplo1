import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyCSg0L2dT3MjRUdBSq_ojHIMJzACfb-LMc",
    authDomain: "restaurante1-6523c.firebaseapp.com",
    databaseURL: "https://restaurante1-6523c.firebaseio.com",
    projectId: "restaurante1-6523c",
    storageBucket: "restaurante1-6523c.appspot.com",
    messagingSenderId: "842674410278"
});

ReactDOM.render(
	<App />, 
	document.getElementById('root'));
registerServiceWorker();
