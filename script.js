// STEP 1: Import Firebase libraries
// These imports give us access to Firebase features
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// STEP 2: Connect to your Firebase project
// This information connects your app to your Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyC1i7apFZw2tortU9jsAV8i6KAj9VT2QRI",
  authDomain: "weight-converstion-app.firebaseapp.com",
  projectId: "weight-converstion-app",
  storageBucket: "weight-converstion-app.appspot.com",
  messagingSenderId: "1079488165473",
  appId: "1:1079488165473:web:bd262f9abac9673b345c20"
};

// STEP 3: Start Firebase
// Initialize Firebase and get the authentication service
initializeApp(firebaseConfig);
const auth = getAuth();

// STEP 4: Get HTML elements
// This function makes it easier to get elements by their ID
function getElement(id) {
  return document.getElementById(id);
}

// Get all the elements we need from the HTML page
const loginForm = getElement("loginForm");
const signupForm = getElement("signupForm");
const logoutButton = getElement("logoutBtn");
const messageBox = getElement("status");
const authForms = getElement("authContainer");

// STEP 5: Helper functions
// Show or hide an element
function showElement(element, shouldShow = true) {
  if (shouldShow) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

// Show a message to the user
function showMessage(message, type = "info") {
  // Set the message type (changes the color)
  messageBox.className = `alert alert-${type}`;
  // Set the message text
  messageBox.textContent = message;
  // Show the message
  showElement(messageBox);
  // Hide the message after 4 seconds
  setTimeout(() => showElement(messageBox, false), 4000);
}

// STEP 6: Sign Up - Create a new account
signupForm.addEventListener("submit", async function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the email and password from the form
  const email = getElement("signEmail").value;
  const password = getElement("signPass").value;

  try {
    // Try to create a new user account
    await createUserWithEmailAndPassword(auth, email, password);
    showMessage("Account created successfully!", "success");
    signupForm.reset(); // Clear the form
  } catch (error) {
    // If there's an error, show it to the user
    showMessage(error.message, "danger");
  }
});

// STEP 7: Login - Sign in to an existing account
loginForm.addEventListener("submit", async function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the email and password from the form
  const email = getElement("loginEmail").value;
  const password = getElement("loginPass").value;

  try {
    // Try to sign in with the provided credentials
    await signInWithEmailAndPassword(auth, email, password);
    showMessage("Logged in successfully!", "success");
    loginForm.reset(); // Clear the form
  } catch (error) {
    // If there's an error, show it to the user
    showMessage(error.message, "danger");
  }
});

// STEP 8: Logout - Sign out the current user
logoutButton.addEventListener("click", async function() {
  try {
    // Try to sign out the current user
    await signOut(auth);
    showMessage("You've been logged out", "info");
  } catch (error) {
    // If there's an error, show it to the user
    showMessage(error.message, "danger");
  }
});

// STEP 9: Track authentication state
// This function runs whenever the user's login status changes
onAuthStateChanged(auth, function(user) {
  // Check if a user is logged in
  const isLoggedIn = user !== null;

  // Update the UI based on login status
  showElement(authForms, !isLoggedIn);  // Show login/signup forms only when logged out
  showElement(logoutButton, isLoggedIn); // Show logout button only when logged in

  // If user is logged in, show a welcome message
  if (isLoggedIn) {
    showMessage(`Welcome, ${user.email}!`, "primary");
  }
});
