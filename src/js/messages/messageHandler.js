const DataManager = require("../data/DataManager");
const addMessageForm = require("./messageForm");
const messageCard = require("./messageCard");

function handleMessages(userId) {
    DataManager.getMessages()
        .then(messages => {
            messages.forEach(message => {
                document.querySelector("#message-feed").innerHTML += messageCard(message.username, message.content)
            })
            document.querySelector("#message-feed").scrollTop = document.querySelector("#message-feed").scrollHeight;
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
                            document.querySelector("#message-feed").scrollTop = document.querySelector("#message-feed").scrollHeight;
                        })
                })
        }
    })
}

module.exports = handleMessages;