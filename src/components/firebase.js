import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBz--KYvMDuYtqDUoVAsUwwKkpLHz0O9QI",
    authDomain: "learnmutiny-signup.firebaseapp.com",
    projectId: "learnmutiny-signup",
    storageBucket: "learnmutiny-signup.appspot.com",
    messagingSenderId: "1043518567726",
    appId: "1:1043518567726:web:d061c49e8679dedfce76bf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp 