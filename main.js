import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
  authDomain: "learnmutiny-60952.firebaseapp.com",
  projectId: "learnmutiny-60952",
  storageBucket: "learnmutiny-60952.appspot.com",
  messagingSenderId: "554213932048",
  appId: "1:554213932048:web:17ad647356f22fe261de95",
};

const firebase = initializeApp(firebaseConfig);

const app = (document.querySelector("#app").innerHTML = `
  <div>
    <div class="main">
    <img src="./assets/bear.PNG" alt="bear2" />
      <h1 class="title">learnmutiny.</h1>
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

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;

  let usernameVal = validateUsername(username);
  if (usernameVal == false) {
    return;
  }
  let emailVal = validateEmail(email);
  if (emailVal == false) {
    return;
  }

  storeEmail(emailVal, usernameVal);
});

function storeEmail(email, name) {
  const db = getDatabase();
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
