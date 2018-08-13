
const DataManager = Object.create(null, {
    login: {
        value: (email, username) => {
            return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
                .then(r => r.json())
        }
    },



    getArticles: {
        value: () => {

        }
    }
})

module.exports = DataManager