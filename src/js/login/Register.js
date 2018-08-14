const registerCreator = Object.create(null, {
    registerForm: {
        value: () => {
            return `<div>
            <p>Please Create a User Account</p>
            <input id="registerUsername" placeholder="Username"></input>
<input id="registerEmail" placeholder="Email"></input>
<button id="registerSubmit">Submit</button>
</div>`
        }
    }




})

module.exports = registerCreator