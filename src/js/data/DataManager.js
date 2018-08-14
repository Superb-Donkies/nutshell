const DataManager = Object.create(null, {
    login: {
        value: () => {}
    },
    getArticles: {
        value: () => {}
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
    }



})

module.exports = DataManager;