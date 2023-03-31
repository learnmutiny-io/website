import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
  authDomain: "learnmutiny-60952.firebaseapp.com",
  projectId: "learnmutiny-60952",
  storageBucket: "learnmutiny-60952.appspot.com",
  messagingSenderId: "554213932048",
  appId: "1:554213932048:web:17ad647356f22fe261de95",
  databaseUrl: "https://learnmutiny-60952-default-rtdb.firebaseio.com/",
};

const firebase = initializeApp(firebaseConfig);

const app = (document.querySelector("#app").innerHTML = `
  <div class="main">
    <div class="nav-bar">
      <div class="nav-buttons">
        <button class="buttons" id="discover">discover.</button>
      </div>
    </div>
    <div>
    <img class="pic" src="./assets/bear.png" alt="bear2" />
      <h1 id="title">learnmutiny.</h1>
    <div>
  </div>
`);

const discoverButton = document.querySelector("#discover");

discoverButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("img").classList.remove("pic");
  document.querySelector("img").classList.add("pic-clicked");
});

function storeEmail(email, name) {
  const db = getDatabase(firebase);
  set(ref(db, `users/${name}`), {
    username: name,
    email: email,
  });
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return email;
  }
  alert("You have entered an invalid email address");
  return false;
}
