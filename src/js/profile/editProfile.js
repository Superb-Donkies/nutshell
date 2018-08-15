function saveUserDetails(){
    let aboutObject = {
        bio: document.querySelector("#add-bio").value,
        image: document.querySelector("#add-image").value,
        birthday: document.querySelector("#add-birthday").value,
    }
    return aboutObject
}

module.exports = saveUserDetails;