"use strict";

const DataManager = require("../data/DataManager");
const taskCard = require("./tasksCard");
const createForm = require("./tasksForm");







function handleTasks(userId) {
    DataManager.getTasks(userId)
        .then(response => {
            document.querySelector("#task-form").innerHTML = `<button id="add-task">Add Task</button>`;
            response.forEach(task => {
                if (task.completion === false) {
                    document.querySelector("#task-content").innerHTML += taskCard(task)
                }
            })
        })
        .then(() => {

            ///////////event listener for the add task

            document.querySelector("#add-task").addEventListener("click", () => {
                document.querySelector("#task-form").innerHTML += createForm();
            })
        })
        .then(() => {

            /////////putting the task to the dom

            document.querySelector("#task-form").addEventListener("click", () => {
                if (event.target.id === "save-task") {
                    const newTask = {
                        title: document.querySelector("#task-entry").value,
                        completeDate: document.querySelector("#date-entry").value,
                        completion: false,
                        userId: userId
                    }
                    DataManager.saveTask(newTask)
                        .then(() => {
                            DataManager.getTasks(userId)
                                .then(response => {
                                    document.querySelector("#task-form").innerHTML = `<button id="add-task">Add Task</button>`;
                                    document.querySelector("#task-content").innerHTML = "";
                                    response.forEach(task => {
                                        if (task.completion === false) {
                                            document.querySelector("#task-content").innerHTML += taskCard(task)
                                        }
                                    })
                                })
                        })
                }
            })
            ///////////editing the task

            document.querySelector("#task-content").addEventListener("click", (event) => {
                if (event.target.className === "checkbox") {
                    let newObject = {
                        completion: true
                    }
                    let taskId = event.target.id.split("--")[1];
                    DataManager.patchTaskButton(taskId, newObject)
                        .then(() => {
                            return DataManager.getTasks(userId)

                        })
                        .then(response => {
                            document.querySelector("#task-content").innerHTML = "";
                            response.forEach(task => {
                                if (task.completion === false) {
                                    document.querySelector("#task-content").innerHTML += taskCard(task)
                                }
                            })
                        })
                }
                if (event.target.className === "edit-button") {
                    let newForm = `<div id="edit-task-form">
                                    <fieldset class="task">
                                        <label>Task</label>
                                        <input type="text" id="task-entry" placeholder="What do you want to do?">
                                    </fieldset>
                                    <fieldset class="complete-date">
                                        <label>Complete Date</label>
                                        <input type="date" id="date-entry">
                                    </fieldset>
                                    <fieldset>
                                        <button class="edit-save-task">Save Task</button>
                                    </fieldset> 
                                    </div>`;
                    event.target.parentElement.parentElement.innerHTML = newForm;
                }
                if (event.target.className === "edit-save-task") {
                    const newTask = {
                        title: document.querySelector("#task-entry").value,
                        completeDate: document.querySelector("#date-entry").value,
                        completion: false,
                        userId: userId
                    }
                    DataManager.editTask(event.target.parentElement.parentElement.parentElement.id.split("--")[1], newTask).then(() => {
                        DataManager.getTasks(userId).then(tasks => {
                        document.querySelector("#task-content").innerHTML = "";
                        tasks.forEach(task => {
                            if (task.completion === false) {
                                document.querySelector("#task-content").innerHTML += taskCard(task)
                            }
                        })
                    })
                })
            }
        })
    })
};

module.exports = handleTasks;