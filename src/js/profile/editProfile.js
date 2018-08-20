/*
    Author: Ricky Bruner
    Purpose: This module creates an object out of what a user edits into their profile
*/

function saveUserDetails(){
    let aboutObject = {
        bio: document.querySelector("#add-bio").value,
        image: document.querySelector("#add-image").value,
        birthday: document.querySelector("#add-birthday").value,
    }
    return aboutObject
}

module.exports = saveUserDetails;