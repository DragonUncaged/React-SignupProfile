# React-SignupProfile

This project is a simple authentication system built using React, React Router, and Redux for managing user authentication. It includes a signup page where users can create an account, and a profile page where users' information is displayed. The project uses local storage to store the authentication token and Redux for managing user authentication state.

## Features

- **Signup Page**: Allows users to input their details (username, email, password) and sign up.
- **Profile Page**: Displays the user's profile information once they are logged in.
- **Authentication State**: Managed using Redux and local storage.
- **React Router**: Navigation between signup and profile pages.
- **Redirects**: Redirects to the profile page if authenticated, or signup page if not.
- **Logout**: Log out and clear user data and token.

## Prerequisites

- **Node.js and npm**: Install from [here](https://nodejs.org/).

## Components
- SignupPage: Form for username, email, and password; stores data in local storage.
- ProfilePage: Displays user details; provides a logout button to clear data.
- Navbar: Simple navigation links to signup and profile pages.

### Redux Setup
- Actions: Set and clear user data and token.
- Reducer: Manages authentication state (user data and token).
- Store: Configures Redux store and provides state to the app.

