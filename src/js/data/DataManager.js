const DataManager = Object.create(null, {
    login: {
        value: () => {
            value: (email, username) => {
                return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
                    .then(r => r.json())
            }
        }
    },
    getArticles: {
        value: () => {
        }
    },
    getEvent: {
        value: () => {
            return fetch("http://localhost:8088/events")
                .then(res => res.json())
        }
    },
    saveEvent: {
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
    removeEvent: {
        value: (eventId) => {
            return fetch(`http://localhost:8088/events/${eventId}`, {
                method: "Delete"
            }).then(result => result.json())
        }
    },
    editEvent: {
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