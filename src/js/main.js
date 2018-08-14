const loginBuilder = require("./login/Login")
let buildDom = require("./DOMbuilder");
const registerCreator = require("./login/Register")
const DataManager = require("./data/DataManager")
const navbarFunctions = require("./navbar/navbar")



document.querySelector("#navbar").addEventListener("click", () => {
    sessionStorage.clear()
    document.querySelector("#navbar").innerHTML = ""
    document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
})

document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()


function login() {
    document.querySelector("#loginContainer").addEventListener("click", () => {
        let typeClickedOn = event.target.id
        if (typeClickedOn === "loginSubmit") {
            let email = document.querySelector("#loginEmail").value
            let username = document.querySelector("#loginUsername").value
            DataManager.login(email, username)
                .then(user => {
                    if (user.length) {
                        let userId = user[0].id
                        sessionStorage.setItem("userId", userId)
                    }
                    return user
                }).then(user => {
                    let userId = user[0].id
                    document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder()
                })
        }
        else if (typeClickedOn === "register") {
            document.querySelector("#loginContainer").innerHTML = ""
            document.querySelector("#loginContainer").innerHTML = registerCreator.registerForm()

            document.querySelector("#registerSubmit").addEventListener("click", () => {
                let email = document.querySelector("#registerEmail").value;
                let username = document.querySelector("#registerUsername").value;
                DataManager.register(email, username)
                    .then(() => {
                        document.querySelector("#loginContainer").innerHTML = ""
                        document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
                    })
            }
            )
        }
    })
}
login()
    // document.querySelector("#loginSubmit").addEventListener("click", () => {
    //     let email = document.querySelector("#loginEmail").value
    //     let username = document.querySelector("#loginUsername").value
    //     DataManager.login(email, username)
    //         .then(user => {
    //             if (user.length) {
    //                 let userId = user[0].id
    //                 sessionStorage.setItem("userId", userId)
    //             }
    //             return user
    //         }).then(user => {
    //             let userId = user[0].id
    //             document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder()
    //         })
    // })

    // document.querySelector("#register").addEventListener("click", () => {
    //     document.querySelector("#loginContainer").innerHTML = ""
    //     document.querySelector("#loginContainer").innerHTML = registerCreator.registerForm()

    //     document.querySelector("#registerSubmit").addEventListener("click", () => {
    //         let email = document.querySelector("#registerEmail").value;
    //         let username = document.querySelector("#registerUsername").value;
    //         DataManager.register(email, username)
    //             .then(() => {
    //                 document.querySelector("#loginContainer").innerHTML = ""
    //                 document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
    //             })
    //     })


    // })
