
const DataManager = Object.create(null, {
    login: {
        value: () => {
            return fetch("http://localhost:8088/users")
                .then(r => r.json())

        }
    },
    getArticles: {
        value: () => {

        }
    }
})

module.exports = DataManager