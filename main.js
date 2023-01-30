import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const DOMAIN = import.meta.env.DOMAIN_URL;

const firebaseConfig = {
  apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
  authDomain: "learnmutiny-60952.firebaseapp.com",
  projectId: "learnmutiny-60952",
  storageBucket: "learnmutiny-60952.appspot.com",
  messagingSenderId: "554213932048",
  appId: "1:554213932048:web:17ad647356f22fe261de95",
  databaseUrl: DOMAIN,
};

const firebase = initializeApp(firebaseConfig);

const app = (document.querySelector("#app").innerHTML = `
  <div>
    <div class="main">
    <img src="./assets/bear.png" alt="bear2" />
      <h1 id="title">learnmutiny.</h1>
        <form id="form">
          <input class="inputs" type="text" id="username" placeholder="username." />
          <input class="inputs" type="email" id="email" placeholder="email." />
          <button id="next">learn.</button>
        </form>
    <div>
  </div>
`);

const nextButton = document.querySelector("#next");

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("title").innerHTML = "thanks.";

  let em = document.getElementById("email");
  let u = document.getElementById("username");

  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;

  let usernameVal = validateUsername(username);
  if (usernameVal == false) {
    return;
  }
  let emailVal = validateEmail(email);
  if (emailVal == false) {
    return;
  }

  storeEmail(emailVal, usernameVal);
  blockInputs(em, u);
});

function blockInputs(em, us) {
  em.value = "";
  us.value = "";
  em.setAttribute("disabled", true);
  us.setAttribute("disabled", true);
  em.classList.add("inputs-clicked");
  us.classList.add("inputs-clicked");
}

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

function validateUsername(username) {
  if (username.includes(".")) {
    alert("Invalid username, no '.'");
  } else {
    return username;
  }
}
