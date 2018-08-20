const DataManager = require("../data/DataManager")

// Jeremiah Pritchard
// This module creates the Login form with inputs for Username and Email with corresponding buttons for logging in or to register

const loginBuilder = Object.create(null, {
    // function to create the form for the login
    loginForm: {
        value: () => {
            return `<div id="login-form">
                        <h2>Login</h2>
                        <input id="loginUsername" placeholder="Please Enter Username"></input>
                        <input id="loginEmail" placeholder="Please Enter Email"></input>
                        <div class="button-container-1">
                            <button id="loginSubmit">Login</button>
                            <button id="register">Register</button>
                        </div>
                    </div>`
        }
    },
});


module.exports = loginBuilder