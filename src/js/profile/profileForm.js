
/*
    Author: Ricky Bruner
    Purpose: These two functions handle rendering the edit profile button and rendering the profile edit form
*/

function renderProfileBtn (){
    return `<button id="update-profile">Update Profile</button>`
}

function renderProfileForm(){
          return `<div id="profile-form">
            <input type="date" placeholder="Enter your Birthday" id="add-birthday">
            <textarea placeholder="Tell everyone your story" id="add-bio"></textarea>
            <input type="text" placeholder="copy an image url from a more successful social medial website" id="add-image">
                <button id="save-profile">Save Changes</button>
            </div>`
}

module.exports = {renderProfileBtn, renderProfileForm};
