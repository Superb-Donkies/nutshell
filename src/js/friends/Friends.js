// Jeremiah Pritchard
// This module creates the form that allows the user to search for friends

const friendForm = Object.create(null, {
    friendSearchForm: {
        value: () => {
            return `<div class="friendSearch">
                        <input id="friendSearch" placeholder="Search for Friends"></input>
                        <button id="friendButton"><i class="fas fa-search"></i> Search Now</button>
                        <div id="addButton"></div>
                    </div>`
        }
    },
    friendConfirmation: {
        value: () => {
            return `<button id="friendConfirmationButton"><i class="far fa-plus-square"></i> Add Friend</button>`
        }
    }
})


module.exports = friendForm