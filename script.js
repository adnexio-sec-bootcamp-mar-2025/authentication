/*
Feature of this project
- prompt user for username and password
- boolean (authenticated)
- email @.com
- forget password or username

Step 1: Import library (Firebase) [Done]
Step 2: Connect to the firebase [Done]
         - Create a project in firebase
        - obtain apiKey, projectId, storageBucket, appId
Step 3: initialize firebase (start firebase service) [Done]
Step 4: DOM - Map the html elment to the js variable : document.getElementById
Step 5: Create functions helper 
Step 6: Create function, event handler create account,
Step 7: Create function, event handler login account,
Step 8: Create function, event handler logout account,
Step 9: Track state of the authentication 

Bonus:
Step 10: Create function, event handler forget password
*/

// Step 1: Import library (Firebase)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    sendPasswordResetEmail 
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Step 2: Connect to the firebase
const firebaseConfig = {
    apiKey: "AIzaSyCypJlv7_z-TJKWDyAp7COqvaW6bZqxgOg",
    authDomain: "user-authentication-cfcea.firebaseapp.com",
    projectId: "user-authentication-cfcea",
    storageBucket: "user-authentication-cfcea.firebasestorage.app",
    messagingSenderId: "396644351513",
    appId: "1:396644351513:web:1ff2ddc42c3d914536f488",
    measurementId: "G-51GGR07BXV"
  };

  // Step 3: initialize firebase (start firebase service)
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Step 5: Create functions helper 
  function showElement(element, shouldShow = true) {
    if (shouldShow) {
        element.classList.remove("d-none"); // to show the html elment
    } else {
        element.classList.add("d-none"); // to hide the html elment
    }
  }

  function getElement(id) {
    return document.getElementById(id);
  }

  function showMessage(message, type = "info") {
    messageBox.className = `alert alert-${type}`; // Set the message type (change the color)
    messageBox.innerHTML = message; // Set the message
    showElement(messageBox); // Show the message
    setTimeout(() => {
        showElement(messageBox, false);
    }, 4000); // Hide the message after 4 seconds
  }

  // Step 4: DOM - Map the html elment to the js variable : document.getElementById
  const loginForm = getElement("loginForm");
  const signupForm = getElement("signupForm");
  const logoutButton = getElement("logoutBtn");
  const messageBox = getElement("status");
  const authForms = getElement("authContainer");

  // Step 6: Create function, event handler create account,
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    const email = getElement("signEmail").value;
    const password = getElement("signPass").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password); // Create a new user
        showMessage("Account created successfully", "success");
        signupForm.reset(); // Clear the form
        console.log("Account created successfully");
    } catch (error) {
        showMessage(error.message, "danger");
    }
  });

  // Step 7: Create function, event handler login account,
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form
    const email = getElement("loginEmail").value;
    const password = getElement("loginPass").value;

    try {
        await signInWithEmailAndPassword(auth, email, password); // Login the user
        showMessage("Login successfully", "success");
        loginForm.reset(); // Clear the form
    } catch (error) {
        showMessage(error.message, "danger");
    }
  });

  // Step 8: Create function, event handler logout account
  logoutButton.addEventListener("click", async () => {
    try {
        await signOut(auth); // Logout the user
        showMessage("Logout successfully", "success");
    } catch (error) {
        showMessage(error.message, "danger");
    }
  });

  // Step 9: Track state of the authentication 
  onAuthStateChanged(auth, (user) => {
    if (user) {
        showElement(authForms, false); // Hide the form
        showElement(logoutButton); // Show the logout button
        showMessage("Welcome,", user.email, "you are logged in", "primary");
    } else {
        showElement(authForms); // Show the form
        showElement(logoutButton, false); // Hide the logout button
    }
  });