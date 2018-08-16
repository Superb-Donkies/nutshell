const DataManager = require("./data/DataManager");
const loginBuilder = require("./login/Login");
const buildDom = require("./DOMbuilder");
const registerCreator = require("./login/Register");
const navbarFunctions = require("./navbar/navbar");
const getDate = require("./getDate");
const friendForm = require("./friends/Friends");
const friendDisplay = require("./friends/friendDisplay");
const handleProfile = require("./profile/profileHandler");
const handleEvents = require("./events/eventHandler");
const handleTasks = require("./tasks/mainTasks");
const handleArticles = require("./articles/articleHandler");
const handleMessages = require("./messages/messageHandler");

// Creates the Login page to on Load

// function with event listeners to decect login or register

document.querySelector("#wrapper").addEventListener("click", () => {
    // Sets variable for whatever Id is clicked on
    let typeClickedOn = event.target.id
    // If the Id is loginSubmit then run this
    if (e.target.id === "friendButton") {
        let searchedUser = document.querySelector("#friendSearch").value
        DataManager.friendChecker(searchedUser)
            .then(result => {
                if (result.length) {
                    document.querySelector("#addButton").innerHTML = friendForm.friendConfirmation()
                    document.querySelector("#friendConfirmationButton").addEventListener("click", () => {
                        let userId = JSON.parse(sessionStorage.getItem("user"))[0].id
                        let friendId = result[0].id
                        let friendUsername = result[0].username
                        DataManager.friendValidator(userId, friendId)
                            .then(response => {
                                if (response.length) {
                                    alert("Friend Already Added!")
                                }

                                else {
                                    DataManager.friendAdder(userId, friendId, friendUsername)
                                        .then((friendUsername) => {
                                            DataManager.friendDisplayer(friendUsername)
                                            return friendUsername
                                        })
                                        .then(friendUsername => {
                                            let friendBox = friendDisplay.onLoadDisplay(friendUsername.friendUsername, friendUsername.id)
                                            document.querySelector("#friendBox").innerHTML += friendBox
                                        })
                                }

                            })
                    })
                }
                else {
                    alert("User can't be found.")
                }
            })
    }
    else if (typeClickedOn === "loginSubmit") {
        // Takes the values from the input fields
        let email = document.querySelector("#loginEmail").value
        let username = document.querySelector("#loginUsername").value
        if (e.target.id === "friendButton") {
            let searchedUser = document.querySelector("#friendSearch").value
            DataManager.friendChecker(searchedUser)
                .then(result => {
                    if (result.length) {
                        document.querySelector("#addButton").innerHTML = friendForm.friendConfirmation()
                        document.querySelector("#friendConfirmationButton").addEventListener("click", () => {
                            let userId = JSON.parse(sessionStorage.getItem("user"))[0].id
                            let friendId = result[0].id
                            let friendUsername = result[0].username
                            DataManager.friendValidator(userId, friendId)
                                .then(response => {
                                    if (response.length) {
                                        alert("Friend Already Added!")
                                    }

                                    else {
                                        DataManager.friendAdder(userId, friendId, friendUsername)
                                            .then((friendUsername) => {
                                                DataManager.friendDisplayer(friendUsername)
                                                return friendUsername
                                            })
                                            .then(friendUsername => {
                                                let friendBox = friendDisplay.onLoadDisplay(friendUsername.friendUsername, friendUsername.id)
                                                document.querySelector("#friendBox").innerHTML += friendBox
                                            })
                                    }

                                })
                        })
                    }
                    else {
                        alert("User can't be found.")
                    }
                })
        }
        // Then plugs values into a function that looks up a user to see if they exist
        DataManager.login(email, username)
            .then(user => {
                // If user exists set userId as sessionStorage
                if (user.length) {
                    sessionStorage.setItem("user", JSON.stringify(user));
                    document.querySelector("#loginContainer").innerHTML = ""
                    document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder();
                }
                // If user does not exist through up an Alert
                else {
                    alert("User does not exist. Please try again or register new user.")
                }
                // Return result from user checker to be able to be used elsewhere
                return user
            }).then(user => {
                return user
            })
            .then((user) => {
                let userId = JSON.parse(sessionStorage.getItem("user"))[0].id;
                buildDom();
                handleArticles(userId);
                handleMessages(userId);
                handleProfile(userId);
                document.querySelector("#friendsSearch").innerHTML = friendForm.friendSearchForm();
                DataManager.friendsList(userId)
                    .then(result => {
                        friendListBuilder(result)
                    })
                handleTasks(userId);
                handleEvents(userId);
            });
    }
    else if (typeClickedOn.includes("removeFriendButton")) {
        let user = JSON.parse(sessionStorage.getItem("user"))
        let friendId = event.target.id.split("--")[1]
        let friendUsername = event.target.className
        DataManager.removeFriend(parseInt(friendId))

            .then(
                event.target.parentElement.remove()

            )
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
            DataManager.login(email, username)
                .then(result => {
                    if (result.length) {
                        alert("User alreay exists!")
                    }
                    else {

                        DataManager.register(email, username)
                            .then(() => {
                                // Then clear the container and rebuild the login form
                                document.querySelector("#loginContainer").innerHTML = ""
                                document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
                            })

                    }
                })

        })
        // Add event listener to back button to go back to login form
        document.querySelector("#backButton").addEventListener("click", () => {
            document.querySelector("#loginContainer").innerHTML = ""
            document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
        })

    }
})


// Invokes the Login Function
loginChecker = () => {
    if (sessionStorage.getItem("user") === null) {
        document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
    }
    else {
        document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder()
        document.querySelector("#loginContainer").innerHTML = ""
        let userId = JSON.parse(sessionStorage.getItem("user"))[0].id;
        console.log(userId);
        buildDom();
        handleArticles(userId);
        handleMessages(userId);
        handleProfile(userId);
        document.querySelector("#friendsSearch").innerHTML = friendForm.friendSearchForm();
        DataManager.friendsList(userId)
            .then(result => {
                friendListBuilder(result)
            });
        handleTasks(userId);
        handleEvents(userId);
    }
}
friendListBuilder = (friend) => {
    console.log("friend", friend)
    friend.forEach(friends => {
        document.querySelector("#friendBox").innerHTML += friendDisplay.onLoadDisplay(friends.friendUsername, friends.id)
    })
}

// Event listener to detect logout button
document.querySelector("#navbar").addEventListener("click", () => {
    if (event.target.id === "navLogout") {
        // Clears session storage
        sessionStorage.clear()
        // Clears the navbar div
        document.querySelector("#navbar").innerHTML = "";
        document.querySelector("#user-page").innerHTML = "";
        // Then rebuilds the Login screen
        document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
    }
})
loginChecker()