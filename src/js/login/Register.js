// Jeremiah Pritchard
// This module creates the register form when the register button is clicked on the login page

const registerCreator = Object.create(null, {
    registerForm: {
        // Function to create a form to register a new user
        value: () => {
            return `<div id="register-form">
                        <button id="backButton">Back</button>
                        <p>Please Create a User Account</p>
                        <input id="registerUsername" placeholder="Username"></input>
                        <input id="registerEmail" placeholder="Email"></input>
                        <button id="registerSubmit">Submit</button>
                    </div>`
        }
    }
})

module.exports = registerCreator