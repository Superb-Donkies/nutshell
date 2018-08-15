const loginBuilder = require("./login/Login");
const buildDom = require("./DOMbuilder");
const articleFormManager = require("./articleForm");
const makeArticle = require("./articleCard");
const getDate = require("./getDate");
const DataManager = require("./data/DataManager");
const navbarFunctions = require("./navbar/navbar");
const registerCreator = require("./login/Register");
const editArticleManager = require("./editArticleManager");
const addMessageForm = require("./messageForm");
const messageCard = require("./messageCard");
const friendForm = require("./friends/Friends")
const friendDisplay = require("./friends/friendDisplay")

// Creates the Login page to on Load

// function with event listeners to decect login or register

document.querySelector("#wrapper").addEventListener("click", () => {
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
                    sessionStorage.setItem("user", JSON.stringify(user));
                    document.querySelector("#loginContainer").innerHTML = ""
                }
                // If user does not exist through up an Alert
                else {
                    alert("User does not exist. Please try again or register new user.")
                }
                // Return result from user checker to be able to be used elsewhere
                return user
            }).then(user => {
                document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder();
                return user
            })
            .then((user) => {
                let userId = JSON.parse(sessionStorage.getItem("user"))[0].id;
                buildDom();
                handleArticles(userId);
                handleMessages(userId);
                document.querySelector("#friendsSearch").innerHTML = friendForm.friendSearchForm();
                DataManager.friendsList(userId)
                    .then(result => {
                        friendListBuilder(result)
                    })
            });
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
        document.querySelector("#friendsSearch").innerHTML = friendForm.friendSearchForm();
        DataManager.friendsList(userId)
            .then(result => {
                friendListBuilder(result)
            });
        // document.querySelector("#friendBox").innerHTML = friendDisplay.onLoadDisplay(result)
    }
}

friendListBuilder = (friend) => {
    friend.forEach(friends => {
        document.querySelector("#friendBox").innerHTML += friendDisplay.onLoadDisplay(friends.friendUsername)
    })
}

loginChecker()
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




function handleMessages(userId) {
    DataManager.getMessages()
        .then(messages => {
            messages.forEach(message => {
                document.querySelector("#message-feed").innerHTML += messageCard(message.username, message.content)
            })
        })
    document.querySelector("#message-form").innerHTML = addMessageForm();
    document.querySelector("#messages-content").addEventListener("click", (e) => {
        if (e.target.id === "send-message") {
            let message = {
                username: JSON.parse(sessionStorage.getItem("user"))[0].username,
                userId: userId,
                content: document.querySelector("#new-message").value
            }
            document.querySelector("#new-message").value = "";
            DataManager.saveMessage(message)
                .then(() => {
                    DataManager.getMessages()
                        .then(messages => {
                            document.querySelector("#message-feed").innerHTML = "";
                            messages.forEach(message => {
                                document.querySelector("#message-feed").innerHTML += messageCard(message.username, message.content)
                            })
                        })
                })
        }
    })
}


function handleArticles(userId) {
    articleFormManager.renderFormBtn();
    DataManager.getArticles(userId)
        .then((articles) => {
            articles.forEach((article) => {
                document.querySelector("#article-list").innerHTML += makeArticle(article);
            });
        });
    document.querySelector("#article-form-container").addEventListener("click", (e) => {
        if (e.target.id === "add-article-btn") {
            articleFormManager.renderArticleForm();
        }
        if (e.target.id === "post-article") {
            let newArticle = {
                userId: userId,
                title: document.querySelector("#article-title").value,
                summary: document.querySelector("#article-summary").value,
                date: getDate(),
                url: document.querySelector("#article-url").value
            }
            document.querySelector("#article-form-container").innerHTML = "";
            articleFormManager.renderFormBtn();
            DataManager.saveArticle(newArticle)
                .then(() => {
                    DataManager.getArticles(userId)
                        .then((articles) => {
                            document.querySelector("#article-list").innerHTML = "";
                            articles.forEach((article) => {
                                document.querySelector("#article-list").innerHTML += makeArticle(article);
                            });
                        });
                });
        }
    });
    document.querySelector("#article-list").addEventListener("click", (e) => {
        if (e.target.className === "delete-article-btn") {
            let articleId = e.target.id.split("--")[1];
            DataManager.removeArticle(articleId).then(() => {
                e.target.parentElement.parentElement.remove();
            });
        }
        if (e.target.className === "edit-article-btn") {
            editArticleManager.transformArticle();
        }
        if (e.target.className === "save-article-btn") {
            let articleId = e.target.id.split("--")[1];
            let article = editArticleManager.saveEditedArticle(userId);
            DataManager.editArticle(articleId, article)
                .then(() => {
                    DataManager.getArticles(userId)
                        .then((articles) => {
                            document.querySelector("#article-list").innerHTML = "";
                            articles.forEach((article) => {
                                document.querySelector("#article-list").innerHTML += makeArticle(article);
                            });
                        });
                });
        }
    });
}

document.querySelector("#wrapper").addEventListener("click", (e) => {
    if (e.target.id === "friendButton") {
        let searchedUser = document.querySelector("#friendSearch").value
        DataManager.friendChecker(searchedUser)
            .then(result => {
                if (result.length) {
                    // alert(result[0].username)
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
                                            let friendBox = friendDisplay.display(friendUsername.friendUsername)
                                            document.querySelector("#friendBox").innerHTML = friendBox
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
})
