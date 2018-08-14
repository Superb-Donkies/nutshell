const loginBuilder = require("./login/Login")
let buildDom = require("./DOMbuilder");
let eventForm = require("./events/eventForm")
let eventComponent = require("./events/eventComponent")

document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
document.querySelector("#loginSubmit").addEventListener("click", () => {
    let email = document.querySelector("#loginEmail").value
    let username = document.querySelector("#loginUsername").value
    loginBuilder.loginCatcher(email, username)

})




// buildDom();
