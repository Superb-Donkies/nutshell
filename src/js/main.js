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

// JP event listeners to decect login or register

/*              Note On Wrapper
With all the Ids and event listeners being added dynamically everytime a form was cleared or added or refreshed the event listeners kept being detached
So it was decided that an Event Listener at the very top would work best. All events would bubble up to the wrapper with plenty of Ifs to check what has been clicked
This way most of the event listeners could condensed into one large Listener
*/

document.querySelector("#wrapper").addEventListener("click", () => {
    // Sets variable for whatever Id is clicked on JP
    let typeClickedOn = event.target.id
    // If add friend button is clicked run this JP
    if (typeClickedOn === "friendButton") {
        // Takes value from what is typed into search field JP
        let searchedUser = document.querySelector("#friendSearch").value
        // Takes value from search field and uses that to lookup a user JP
        DataManager.friendChecker(searchedUser)
            .then(result => {
                // If user exists run this JP
                if (result.length) {
                    // Adds add friend button JP
                    document.querySelector("#addButton").innerHTML = friendForm.friendConfirmation()
                    document.querySelector("#friendConfirmationButton").addEventListener("click", () => {
                        // When add friend button is clicked run this JP
                        // get userId from session storage
                        let userId = JSON.parse(sessionStorage.getItem("user"))[0].id
                        // Get the ID from the user the user wanted to add as a friend  JP
                        let friendId = result[0].id
                        // Also grab the friends username JP
                        let friendUsername = result[0].username
                        // Plug the variables to see if the relationship already exists JP
                        DataManager.friendValidator(userId, friendId)
                            .then(response => {
                                if (response.length) {
                                    // If relationship already exists send alert JP
                                    alert("Friend Already Added!")
                                }
                                else {
                                    // If relationship does not exist go ahead and add as a friend JP
                                    DataManager.friendAdder(userId, friendId, friendUsername)
                                        .then((friendUsername) => {
                                            // Then get entire list for friends of the user JP
                                            DataManager.friendDisplayer(friendUsername)
                                            return friendUsername
                                        })
                                        .then(friendUsername => {
                                            // Displays list of friends and clears search form and removed the add friend button JP
                                            let friendBox = friendDisplay.onLoadDisplay(friendUsername.friendUsername, friendUsername.id)
                                            document.querySelector("#friendBox").innerHTML += friendBox
                                            document.querySelector("#friendSearch").value = ""
                                            document.querySelector("#friendConfirmationButton").remove()
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
    // If login is clicked run this JP
    else if (typeClickedOn === "loginSubmit") {
        // Takes the values from the input fields JP
        let email = document.querySelector("#loginEmail").value
        let username = document.querySelector("#loginUsername").value
        // Then plugs values into a function that looks up a user to see if they exist JP
        DataManager.login(email, username)
            .then(user => {
                // If user exists set userId as sessionStorage JP
                if (user.length) {
                    sessionStorage.setItem("user", JSON.stringify(user));
                    document.querySelector("#loginContainer").innerHTML = ""
                    document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder();
                }
                // If user does not exist through up an Alert JP
                else {
                    alert("User does not exist. Please try again or register new user.")
                }
                // Return result from user checker to be able to be used elsewhere JP
                return user
            })
            .then((user) => {
                // Loads pertinent data for the user page to load JP
                let userId = JSON.parse(sessionStorage.getItem("user"))[0].id;
                buildDom();
                DataManager.friendsList(userId)
                    .then(result => {
                        friendDisplay.onLoadDisplay(result.friendUsername, result.otherFriendId)
                    })
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
    // If the remove friend is clicked on user page send data to delete relationship in data
    else if (typeClickedOn.includes("removeFriendButton")) {
        let friendId = event.target.id.split("--")[1]
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
            // Checks to make sure input fields are not blank
            if (email || username === "") {
                alert("Please Fill Requirements")
            }
            else {
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
            }
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
