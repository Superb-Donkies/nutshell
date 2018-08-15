
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
                    about: {
                        bio: "Add a bio for yourself!",
                        image: "",
                        birthday: "Add your birthday!",
                    }
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
                .then(res => res.json())
        }
    },
    saveEvents: {
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
            }).then(result => result.json())
        }
    },
    getUser: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}`)
            .then(res => res.json())
        }
    },
    editProfile: {
        value: (userId, object) => {
            return fetch(`http://localhost:8088/users/${userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({about:object})
            }).then(result => result.json())
        }
    }
});

module.exports = DataManager;
