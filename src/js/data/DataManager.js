const DataManager = Object.create(null, {
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
                headers: {"Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(r => r.json())
        }
    },
    patchTaskButton: {
        value: (taskId,task) => {
            return fetch(`http://localhost:8088/tasks/${taskId}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }).then(r => r.json())
        }

    }

})

module.exports = DataManager;