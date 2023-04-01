import { initializeApp } from "firebase/app";
import { set, ref, getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5A2GeyIgaWaapl0adfp77wph7q3w6ds0",
  authDomain: "learnmutiny-60952.firebaseapp.com",
  databaseURL: "https://learnmutiny-60952-default-rtdb.firebaseio.com",
  projectId: "learnmutiny-60952",
  storageBucket: "learnmutiny-60952.appspot.com",
  messagingSenderId: "554213932048",
  appId: "1:554213932048:web:17ad647356f22fe261de95",
};

const application = initializeApp(firebaseConfig);
const db = getDatabase(application);

const app = (document.querySelector("#app").innerHTML = `
  <div>
    <div class="main">
    <img src="../assets/bear.png" alt="bear2" />
      <h1 id="title">learnmutiny.</h1>
        <form id="form">
          <div class="form-inputs">
            <input class="inputs" type="text" id="name" placeholder="name." />
            <input class="inputs" type="email" id="email" placeholder="email." />
            <select class="inputs" id="userType" required >
              <option value="">select one.</option>
              <option value="student">student.</option>
              <option value="recruiter">recruiter.</option>
              <option value="">investor.</option>
            </select>
          <div>
          <button id="button">learn.</button>
        </form>
    <div>
  </div>
`);

const form = document.querySelector("#form");
const email = document.getElementById("email");
const _name = document.getElementById("name");
const userType = document.getElementById("userType");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let emailVal = email.value;
  let nameVal = _name.value;
  let userTypeVal = userType.value;

  validateName(nameVal);
  validateEmail(emailVal);

  const formData = new FormData(form);

  formData.append("name", nameVal);
  formData.append("email", emailVal);
  formData.append("userType", userTypeVal);

  const response = await fetch(
    "https://us-central1-learnmutiny-60952.cloudfunctions.net/sendEmailFromForm",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        userType: formData.get("userType"),
      }),
    }
  );

  if (response.ok) {
    console.log("Email sent successfully");
    storeEmail(emailVal, nameVal, userTypeVal);
    document.getElementById("title").innerHTML = "check email.";
  } else {
    console.log(response.statusText);
    document.getElementById("title").innerHTML = "try again.";
  }
});

function storeEmail(email, name, userType) {
  set(ref(db, `users/${name}`), {
    username: name,
    email: email,
    userType: userType,
  });
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return email;
  }
  alert("You have entered an invalid email address");
  return false;
}

function validateName(name) {
  if (!name.trim()) {
    alert("Please enter a name.");
    return false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Please enter a valid name.");
    return false;
  } else if (name.includes(".")) {
    alert("Invalid username, no '.'");
  } else {
    return name;
  }
}
