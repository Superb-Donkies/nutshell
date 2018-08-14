const loginBuilder = require("./login/Login")
let buildDom = require("./DOMbuilder");
const registerCreator = require("./login/Register")
const DataManager = require("./data/DataManager")
const navbarFunctions = require("./navbar/navbar")


// Event listener to detect logout button
document.querySelector("#navbar").addEventListener("click", () => {
    // Clears session storage
    sessionStorage.clear()
    // Clears the navbar div
    document.querySelector("#navbar").innerHTML = ""
    // Then rebuilds the Login screen
    document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
})
// Creates the Login page to on Load
document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()

// function with event listeners to decect login or register
function login() {
    document.querySelector("#loginContainer").addEventListener("click", () => {
        // Sets variable for whatever Id is clicked on
        let typeClickedOn = event.target.id
        // If the Id is loginSubmit then run this
        if (typeClickedOn === "loginSubmit") {
            // Takes the values from the input fields
            let email = document.querySelector("#loginEmail").value
            let username = document.querySelector("#loginUsername").value
            // Then plugs values into a function that looks up a user to see if they exist
            DataManager.login(email, username)
                .then(user => {
                    // If user exists set userId as sessionStorage
                    if (user.length) {
                        let userId = user[0].id
                        sessionStorage.setItem("userId", userId)
                    }
                    // If user does not exist through up an Alert
                    else {
                        alert("User does not exist. Please try again or register new user.")
                    }
                    // Return result from user checker to be able to be used elsewhere
                    return user
                }).then(user => {
                    // Convert user.id into a variable to be able to be passed down to new functions
                    let userId = user[0].id
                    document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder()
                })
        }
        // If register button is created run logic that builds the register form
        else if (typeClickedOn === "register") {
            // Clears login form
            document.querySelector("#loginContainer").innerHTML = ""
            // Loads register form
            document.querySelector("#loginContainer").innerHTML = registerCreator.registerForm()
            // Add event listener for the submit button
            document.querySelector("#registerSubmit").addEventListener("click", () => {
                // Take new values from input fields
                let email = document.querySelector("#registerEmail").value;
                let username = document.querySelector("#registerUsername").value;
                // Plug input fields into function that adds a new user
                DataManager.register(email, username)
                    .then(() => {
                        // Then clear the container and rebuild the login form
                        document.querySelector("#loginContainer").innerHTML = ""
                        document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
                    })
            })
            // Add event listener to back button to go back to login form
            document.querySelector("#backButton").addEventListener("click", () => {
                document.querySelector("#loginContainer").innerHTML = ""
                document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
            })

        }
    })
}
// Invokes the Login Function
login()