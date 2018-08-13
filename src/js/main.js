const loginBuilder = require("./login/Login")
let buildDom = require("./DOMbuilder");

document.querySelector("#loginContainer").appendChild(loginBuilder())
buildDom();
