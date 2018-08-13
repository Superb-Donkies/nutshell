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
                    debugger
                    if (user.length) {
                        let userId = user[0].id
                        sessionStorage.setItem("userId", userId)

                    }
                })
        }
    }
}
)


// DataManager.login()
//     .then(
//         loginBuilder()
//     )

module.exports = loginBuilder