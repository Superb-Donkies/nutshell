const DataManager = Object.create(null, {
    login: {
        // Function that passes the values from login and looks up user
        value: (email, username) => {
            return fetch(`http://localhost:8088/users?email=${email}&username=${username}`)
                .then(r => r.json())
        }
    },
    register: {
        // Function that takes values from register form and creates a new user
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
        value: (userId) => {
            return fetch(`http://localhost:8088/articles?userId=${userId}`)
            .then(res => res.json())
        }
    },
    saveArticle: {
        value: (article) => {
            return fetch("http://localhost:8088/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
            .then(result => result.json())
        }
    },
    removeArticle: {
        value: (articleId) => {
            return fetch(`http://localhost:8088/articles/${articleId}`, {
                method: "Delete"
            }).then(result => result.json())
        }
    },
    editArticle: {
        value: (articleId, article) => {
            return fetch(`http://localhost:8088/articles/${articleId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
            .then(result => result.json())
        }
    },
    getMessages: {
        value: () => {
            return fetch(`http://localhost:8088/messages`)
            .then(res => res.json())
        }
    },
    saveMessage: {
        value: (message) => {
            return fetch("http://localhost:8088/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            })
            .then(result => result.json())
        }
    },
    getEvents: {
        value: (userId) => {
            return fetch(`http://localhost:8088/events?userId=${userId}`)
                .then(result => result.json())
        }
    },
    saveEvent: {
        value: (event) => {
            return fetch(`http://localhost:8088/events`, {
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
            }).then(result => result.json())
        }
    }
});

module.exports = DataManager;