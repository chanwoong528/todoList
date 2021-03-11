import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';



var firebaseConfig = {
  apiKey: "AIzaSyAArVA0EbZFshANzhHz70BTgP5HfLm0zUs",
  authDomain: "todolist-bdcff.firebaseapp.com",
  projectId: "todolist-bdcff",
  storageBucket: "todolist-bdcff.appspot.com",
  messagingSenderId: "1081467088774",
  appId: "1:1081467088774:web:8a538904fcf8933f42c607"
};

firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
