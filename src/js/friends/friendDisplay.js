// Jeremiah Pritchard
// This module creates the card for the user's current friends. Also adds a button for removal of said friend

const friendDisplay = Object.create(null, {
    onLoadDisplay: {
        value: (friend, id) => {
            return `<div class="friendCard">
                        <p>${friend}</p>
                        <div>
                            <button id="removeFriendButton--${id}" class="delete-btn"><i class="fas fa-user-times"></i> Remove?</button>
                        </div>
                    </div>`
        }
    }
})


module.exports = friendDisplay