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
            return `<div class="friendCard">
                        <p>${friend}</p>
                        <div>
                            <button id="removeFriendButton--${id}" class="delete-btn">Remove <i class="fas fa-user-times"></i></button>
                        </div>
                    </div>`
        }

    }
}


)


module.exports = friendDisplay