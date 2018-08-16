
function buildProfile(user){
    return `<div id="user-profile--${user.id}">
                <img src="${user.about.image}" id="profile-image">
                <h2 id="profile-username">${user.username}</h2>
                <h5 id="profile-birthday">${user.about.birthday}</h5>
                <p id="profile-bio">${user.about.bio}</p>
            </div>`
}

module.exports = buildProfile;