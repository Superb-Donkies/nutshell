const DataManager = require("../data/DataManager");
const buildProfile = require("./profileCard");
const profileFormManager = require("./profileForm");
const saveUserDetails = require("./editProfile");

function handleProfile(userId){
    DataManager.getUser(userId)
    .then(user => {
        document.querySelector("#profile-display").innerHTML = buildProfile(user);
    })
    document.querySelector("#profile-form").innerHTML = profileFormManager.renderProfileBtn();
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

