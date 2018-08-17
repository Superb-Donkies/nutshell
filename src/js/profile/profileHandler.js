/*
    Author: Ricky Bruner
    Purpose: This function handles all tasks associated with rendering and editing a user profile
*/

const DataManager = require("../data/DataManager");
const buildProfile = require("./profileCard");
const profileFormManager = require("./profileForm");
const saveUserDetails = require("./editProfile");

function handleProfile(userId){
    /*
    Get the users details from the DB based on a userId grabbed from sessionStorage, and use that info to build a users profile area. After, render the edit profile button
    */
    DataManager.getUser(userId)
    .then(user => {
        document.querySelector("#profile-display").innerHTML = buildProfile(user);
    })
    document.querySelector("#profile-form").innerHTML = profileFormManager.renderProfileBtn();
    /*
    Event Listener on profile container
    1st condition: if the update button is clicked, render the update form
    2nd condition: is the user clicks the save changed button, send the updates to the users DB "about:" value and then re-render the area with the new details.
    */
    document.querySelector("#profile-content").addEventListener("click", (e) => {
        if(e.target.id === "update-profile"){
            document.querySelector("#profile-form").innerHTML = profileFormManager.renderProfileForm();
        }
        if(e.target.id === "save-profile"){
            DataManager.editProfile(userId, saveUserDetails()).then(() => {
                document.querySelector("#profile-form").innerHTML = profileFormManager.renderProfileBtn();
                DataManager.getUser(userId)
                .then(user => {
                    document.querySelector("#profile-display").innerHTML = buildProfile(user);
                })
            })
        }
    })
}

module.exports = handleProfile;

