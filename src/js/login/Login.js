const DataManager = require("../data/DataManager")

const loginBuilder = Object.create(null, {
    // function to create the form for the login
    loginForm: {
        value: () => {
            return `<div id="login-form">
                        <h2>Login Ya Jerk</h2>
                        <input id="loginUsername" placeholder="Please Enter Username"></input>
                        <input id="loginEmail" placeholder="Please Enter Email"></input>
                        <div class="button-container">
                            <button id="loginSubmit">Login</button>
                            <button id="register">Register</button>
                        </div>
                    </div>`
        }
    },
});


module.exports = loginBuilder