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
            })
        }
    },
    getTasks: {
        value: () => {
            return fetch("http://localhost:8088/tasks")
                .then(r => r.json())
        }
    },
    saveTask: {
        value: (entry) => {
            return fetch("http://localhost:8088/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
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

})

module.exports = DataManager;
