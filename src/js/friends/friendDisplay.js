// Jeremiah Pritchard
// This module creates the card for the user's current friends. Also adds a button for removal of said friend

const friendDisplay = Object.create(null, {
    onLoadDisplay: {
        value: (friend, id) => {
            return `<div class="friendCard">
                    <p>${friend}</p>
                    <button id="removeFriendButton--${id}" class="${friend}">Remove Friend</button>
                    </div>`
        }

    }
}


)


module.exports = friendDisplay