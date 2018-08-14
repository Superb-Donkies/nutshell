const DataManager = require("../data/DataManager")

const loginBuilder = Object.create(null, {
    // function to create the form for the login
    loginForm: {
        value: () => {
            return `<div>
            <input id="loginUsername" placeholder="Please Enter Username"></input>
            <input id="loginEmail" placeholder="Please Enter Email"></input>
            <button id="loginSubmit">Login</button>
            <button id="register">Register</button>
            </div>`
        }
    },
});


module.exports = loginBuilder