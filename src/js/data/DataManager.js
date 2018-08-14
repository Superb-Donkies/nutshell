const DataManager = Object.create(null, {
    login: {
        value: () => {
            value: (email, username) => {
                return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
                    .then(r => r.json())
            }
        }
    },
    register: {
        value: (email, username) => {
            return fetch("http://localhost:8088/users", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                })
            });
        }
    },




    getArticles: {
        value: () => {
        }
    },
    getEvents: {
        value: () => {
            return fetch("http://localhost:8088/events")
                .then(res => res.json())
        }
    },
    saveEvents: {
        value: (event) => {
            return fetch("http://localhost:8088/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            })
                .then(result => result.json())
        }
    },
    removeEvents: {
        value: (eventId) => {
            return fetch(`http://localhost:8088/events/${eventId}`, {
                method: "Delete"
            }).then(result => result.json())
        }
    },
    editEvents: {
        value: (eventId, event) => {
            return fetch(`http://localhost:8088/events/${eventId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
            })
                .then(result => result.json())
        }
    }
})

module.exports = DataManager