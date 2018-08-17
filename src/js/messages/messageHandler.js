/*
    Author: Ricky Bruner
    Purpose: This function handles all tasks associated with rendering the message or "chat" area of the user page
*/

const DataManager = require("../data/DataManager");
const addMessageForm = require("./messageForm");
const messageCard = require("./messageCard");

function handleMessages(userId) {
    /*
    First, all messages are retrieved from the DB and built into a chatbox. Then the scrollTop/scrollHeight makes the section load and then scroll to the bottom of the chatbox, similarly to an instant message area.
    */
    DataManager.getMessages()
        .then(messages => {
            messages.forEach(message => {
                document.querySelector("#message-feed").innerHTML += messageCard(message.username, message.content)
            })
            document.querySelector("#message-feed").scrollTop = document.querySelector("#message-feed").scrollHeight;
        })
    /*
    Next, the add message section is rendered and an event listener is placed on the entire messages container.
    conditional: if send button is clicked in the form, build a message object and wipe the form, then save the object to the DB and re-retrieve the messages and re-render the section
    */ 
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