
function buildProfile(userId, image, username, bio){
    return `<div id="user-profile--${userId}">
                <img src="${image}" id="profile-image">
                <h2 id="profile-username">${username}</h2>
                <p id="profile-bio">${bio}</p>
                <button id="update-profile">Update Profile</button>
            </div>`
}

module.exports = buildProfile;