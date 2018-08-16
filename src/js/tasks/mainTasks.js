"use strict";

const DataManager = require("../data/DataManager");
const taskCard = require("./tasksCard");
const createForms = require("./tasksForm");

function handleTasks(userId) {
    document.querySelector("#task-form").innerHTML = `<button id="add-task">Add Task</button>`;
    DataManager.getTasks(userId)
        .then(response => {
            response.forEach(task => {
                if (task.completion === false) {
                    document.querySelector("#task-content").innerHTML += taskCard(task)
                }
            })
        })
        .then(() => {

            ///////////event listener for the add task

            document.querySelector("#task-main").addEventListener("click", (e) => {
                if(e.target.id === "add-task"){
                    document.querySelector("#task-form").innerHTML = createForms.addTaskForm();
                }
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
                    event.target.parentElement.parentElement.innerHTML = createForms.addEditForm();
                }
                if (event.target.className === "edit-save-task") {
                    const newTask = {
                        title: document.querySelector("#task-entry").value,
                        completeDate: document.querySelector("#date-entry").value,
                        completion: false,
                        userId: userId
                    }
                    DataManager.editTask(event.target.parentElement.parentElement.parentElement.id.split("--")[1], newTask).then(() => {
                        return DataManager.getTasks(userId)
                        }).then(tasks => {
                            document.querySelector("#task-content").innerHTML = "";
                            tasks.forEach(task => {
                                if (task.completion === false) {
                                document.querySelector("#task-content").innerHTML += taskCard(task)
                                }
                            })
                        })
                }
            })
    })
};

module.exports = handleTasks;