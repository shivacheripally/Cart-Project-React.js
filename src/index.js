import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlttYZ0ds1-E0-RGzY09T6akFTKkHhZnc",
  authDomain: "cart-6fb02.firebaseapp.com",
  projectId: "cart-6fb02",
  storageBucket: "cart-6fb02.appspot.com",
  messagingSenderId: "610283622759",
  appId: "1:610283622759:web:cef62d0491290807725fc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
