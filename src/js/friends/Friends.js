const friendForm = Object.create(null, {
    friendSearchForm: {
        value: () => {
            return `<div>
<input id="friendSearch" placeholder="Search for Friends"></input>
<button id="friendButton">Search</button>
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
function searchFriend() { }


module.exports = friendForm