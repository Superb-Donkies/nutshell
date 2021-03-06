/*
    Author: The Superb Donkies
    Purpose: Object housing all Promise functions used throughout the Project.
*/

const DataManager = Object.create(null, {
    /*
        Promise Functions by Jeremiah Pritchard
    */
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
    friendAdder: {
        value: (userId, friendId, friendUsername) => {
            return fetch(`http://localhost:8088/friends`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: userId,
                    otherFriendId: friendId,
                    friendUsername: friendUsername
                })
            })
                .then(result => result.json())
        }
    },
    friendDisplayer: {
        value: (friendUsername) => {
            return fetch(`http://localhost:8088/friends?username=${friendUsername.friendUsername}`)
                .then(r => r.json())
                .then(result => {
                    let username = result.friendUsername
                    return username
                })
        }
    },
    friendsList: {
        value: (userId) => {
            return fetch(`http://localhost:8088/friends?userId=${userId}`)
                .then(result => result.json())
        }
    },
    friendChecker: {
        value: (searchedUser) => {
            return fetch(`http://localhost:8088/users?username=${searchedUser}`)
                .then(result => result.json())
        }
    },
    friendValidator: {
        value: (userId, friendId) => {
            return fetch(`http://localhost:8088/friends?userId=${userId}&otherFriendId=${friendId}`)
                .then(response => response.json())
        }
    },
    removeFriend: {
        value: (id) => {
            return fetch(`http://localhost:8088/friends/${id}`, {
                method: 'DELETE'
            })
        }
    },
    /* 
        Promise Functions by Ricky Bruner
    */  
    getArticles: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/articles?_sort=id&_order=desc`)
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
    },
    /*
        Promise Functions by David Taylor
    */
    getEvents: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/events?_sort=date&_order=asc`)
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
    },
    /* 
        Promise Functions by Alejandro Font
    */
    getTasks: {
        value: (userId) => {
            return fetch(`http://localhost:8088/users/${userId}/tasks?_sort=completeDate&_order=asc`)
                .then(r => r.json())
        }
    },
    saveTask: {
        value: (task) => {
            return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(r => r.json())
        }
    },
    deleteTask: {
        value: (taskId) => {
            return fetch(`http://localhost:8088/tasks/${taskId}`, {
                method: "DELETE",
            }).then(r => r.json())
        }
    },
    editTask: {
        value: (taskId, task) => {
            return fetch(`http://localhost:8088/tasks/${taskId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(r => r.json())
        }
    },
    patchTaskButton: {
        value: (taskId, task) => {
            return fetch(`http://localhost:8088/tasks/${taskId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(r => r.json())
        }
    }
});


module.exports = DataManager;