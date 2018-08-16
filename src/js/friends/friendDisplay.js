const friendDisplay = Object.create(null, {
    display: {
        value: (username) => {
            return `<div>
                    <p>${username}</p>
                    </div>`
        }
    },
    onLoadDisplay: {
        value: (friend, id) => {
            return `<div>
                    <p>${friend}</p>
                    <button id="removeFriendButton--${id}" class="${friend}">Remove Friend</button>
                    </div>`
        }

    }
}


)


module.exports = friendDisplay