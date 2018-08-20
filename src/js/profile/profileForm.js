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
                <div class="button-container">    
                    <button id="leave-profile-form">Go Back</button>
                    <button id="save-profile">Save Changes</button>
                </div>
            </div>`
}

module.exports = {renderProfileBtn, renderProfileForm};
