const friendForm = Object.create(null, {
    friendSearchForm: {
        value: () => {
            return `<div class="friendSearch">
<input id="friendSearch" placeholder="Search for Friends"></input>
<button id="friendButton">Search <i class="fas fa-search"></i></button>
<div id="addButton"></div>
</div>`
        }
    },
    friendConfirmation: {
        value: () => {
return `<button id="friendConfirmationButton">Add Friend</button>
`
        }
    }


})


module.exports = friendForm