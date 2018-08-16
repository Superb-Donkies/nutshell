const friendDisplay = Object.create(null, {
    display: {
        value: (username) => {
            return `<div>
                    <p>${username}</p>
                    </div>`
        }
    },
    onLoadDisplay: {
        value: (friend) => {
            return `<div>
                    <p>${friend}</p>
                    </div>`
        }

    }
}


)


module.exports = friendDisplay