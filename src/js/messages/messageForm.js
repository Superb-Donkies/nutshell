/*
    Author: Ricky Bruner
    Purpose: This module is the HTML representation of a form to add a message in the user-page chat.
*/


function addMessageForm(){
    return `<textarea id="new-message"></textarea>
            <button id="send-message">Send</button>`
}

module.exports = addMessageForm;