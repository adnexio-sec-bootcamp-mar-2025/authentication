# Firebase Authentication Demo

A simple, educational web application demonstrating user authentication with Firebase. This project is designed for teaching JavaScript and Firebase authentication concepts to students.

## Project Overview

This project demonstrates:
- User signup with email and password
- User login with existing credentials
- User logout
- Dynamic UI updates based on authentication state
- Error handling and user feedback

## Files Included

- `index.html` - The main HTML structure with login and signup forms
- `script.js` - The JavaScript code handling Firebase authentication
- `starter-script.js` - A simplified starter version for educational purposes
- `javascript-auth-tutorial.md` - A comprehensive tutorial for instructors

## Setup Instructions

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript
- A Firebase account (free tier is sufficient)

### Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Add a web app to your project
4. Enable Email/Password authentication in the Authentication section
5. Copy your Firebase configuration object

### Project Setup

1. Clone or download this repository
2. Open `script.js` and replace the `firebaseConfig` object with your own Firebase configuration
3. Open `index.html` in your browser (or use a local server like Live Server in VS Code)

## Using the Demo

### Creating a New Account

1. Fill out the "Create Account" form with an email and password
2. Click the "Create Account" button
3. You should see a success message and be automatically logged in

### Logging In

1. Fill out the "Login" form with your email and password
2. Click the "Login" button
3. You should see a welcome message and be logged in

### Logging Out

1. Click the "Logout" button
2. You should see a logout message and return to the login/signup screen

## For Instructors

This project includes materials specifically designed for teaching:

- `starter-script.js` - A simplified version to start with in class
- `javascript-auth-tutorial.md` - A step-by-step guide for teaching this material

### Teaching Approach

1. Start with the HTML structure to explain the UI components
2. Use `starter-script.js` to demonstrate basic form handling and UI updates
3. Gradually introduce Firebase concepts and replace placeholder code
4. Test each feature as you build it
5. Discuss security considerations and best practices

## Troubleshooting

Common issues:

- **Firebase configuration errors**: Make sure your Firebase config is correct
- **CORS errors**: Use a local server instead of opening the HTML file directly
- **Module errors**: Ensure the script tag has `type="module"`
- **Password requirements**: Firebase requires passwords to be at least 6 characters

## Further Learning

After mastering this demo, students can explore:
- Password reset functionality
- Social login (Google, Facebook, etc.)
- User profile management
- Storing user data in Firebase Firestore
- Creating protected routes/content

## License

This project is available for educational use.

## Acknowledgements

- [Firebase](https://firebase.google.com/) for providing the authentication service
- [Bootstrap](https://getbootstrap.com/) for the UI components
