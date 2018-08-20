/*
    Author: Ricky Bruner
    Purpose: This module is the HTML representation of a users message in the user-page chat.
*/

function messageCard(username, message){
    return `<p><span class="username">${username}</span>: ${message}</p>`
}

module.exports = messageCard