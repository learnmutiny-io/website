import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
    authDomain: "learnmutiny-60952.firebaseapp.com",
    databaseURL: "https://learnmutiny-60952-default-rtdb.firebaseio.com/",
    projectId: "learnmutiny-60952",
    storageBucket: "learnmutiny-60952.appspot.com",
    messagingSenderId: "554213932048",
    appId: "1:554213932048:web:17ad647356f22fe261de95"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp 