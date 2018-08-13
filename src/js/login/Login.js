const DataManager = require("../data/DataManager")

function loginBuilder() {
    return`<div>
    <input id="loginUsername" placeholder="Please Enter Username"></input>
    <input id="loginEmail" placeholder="Please Enter Email"></input>
    <button id="loginSubmit">Login</button>
    <button id="register">Register</button>
    </div>`
}

DataManager.login()
    .then(
        loginBuilder()
    )

    module.exports = loginBuilder