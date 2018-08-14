const DataManager = require("../data/DataManager")

const loginBuilder = Object.create(null, {
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
    loginCatcher: {
        value: (email, username) => {
            DataManager.login(email, username)
            .then(user => {
                if (user.length) {
                    let userId = user[0].id;
                    JSON.stringify(userId);
                    sessionStorage.setItem("userId", userId)
                }
                return user
            })
        }
    }
});

module.exports = loginBuilder