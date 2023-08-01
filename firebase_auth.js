import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB00SLzlYWFSy7oQxTayMqVobSb7lnmj-A",
  authDomain: "mega-mart-ba5b5.firebaseapp.com",
  projectId: "mega-mart-ba5b5",
  storageBucket: "mega-mart-ba5b5.appspot.com",
  messagingSenderId: "302176717906",
  appId: "1:302176717906:web:a1a3021cfaca512810638b",
  measurementId: "G-ESNGFCTNW8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signBtn = document.getElementById("signBtn");
console.log(signBtn);
let email = document.getElementById("email");
let password = document.getElementById("password");

signBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("registered", user);
      alert("registered", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("invalid", errorMessage);
      alert("invalid", errorMessage);
      // ..
    });
});

//yaha se login hoga
let loginBtn = document.getElementById("loginBtn");
console.log(loginBtn);
let login_email = document.getElementById("login_email");
let login_password = document.getElementById("login_password");
loginBtn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("logged...", user);
      // console.log("logged...", user);
      window.location.href = "../index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("faileddd...", errorMessage);
      console.log("faileddd...", errorMessage);
    });
});


// export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}

let signPage = document.getElementById("signPage")
let loginPage = document.getElementById("loginPage")
let register = document.querySelector(".register")

signPage.addEventListener("click", ()=>{
  register.classList.add("show");
})

loginPage.addEventListener("click", ()=>{
  register.classList.remove("show");
})