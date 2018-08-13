const loginBuilder = require("./login/Login")
let buildDom = require("./DOMbuilder");

document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
document.querySelector("#loginSubmit").addEventListener("click", () => {
    let email = document.querySelector("#loginEmail").value
    let username = document.querySelector("#loginUsername").value
    loginBuilder.loginCatcher(email, username)

})


// buildDom();
