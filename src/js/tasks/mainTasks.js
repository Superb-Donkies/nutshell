"use strict";

const DataManager = require("../data/DataManager");
const taskCard = require("./tasksCard");
const createForms = require("./tasksForm");

/* A simplistic function that essentially reloads the html of the task-content container.
    Only the tasks with the completion key with the value of FALSE are loaded. */

function reloadPage (response) {
    document.querySelector("#task-content").innerHTML = "";
    response.forEach(task => {
        if (task.completion === false) {
            document.querySelector("#task-content").innerHTML += taskCard(task)
        }
    })
}

function handleTasks (userId) {
            document.querySelector("#task-form").innerHTML = `<button id="add-task">Add Task</button>`;
            DataManager.getTasks(userId)
                .then(response => {
                    reloadPage(response)
                })
                .then(() => {

                    /* Event listener for the adding the task-form to the DOM. */

                    document.querySelector("#task-main").addEventListener("click", (e) => {
                        if (e.target.id === "add-task") {
                            document.querySelector("#task-form").innerHTML = createForms.addTaskForm();
                        }
                    })

                    /* Event listener for putting a task to the api,
                    then reloading the tasks on the dom. */

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
                                            reloadPage(response);
                                        })
                                })
                            }
                        })

                    /*A collection of possible event listeners within my task-content container.
                        First: If the event possessess the className of checkbox, 
                                the api target will find the key of "completion" and switch its 
                                value to TRUE. Then the task-contents are emptied and reloaded, showing 
                                only tasks that have a "completion" value of FALSE. 

                        Second: If the edit button is clicked, then the innerHTML of the card-component
                                is changed to a form. Within the form, the previous title of the task
                                remains as the form's title value, but the date is reloaded.

                        Third: This event listener completes the editing process of the tasks.
                                It takes the values of the edit-form and saves them over the 
                                values of the object within the api. To target the correct id, I had
                                to take the id of the card the form resides within; leading to the 
                                parentElement... portion of the database call. After the object within
                                the api is altered, the task content reloads again with the correct
                                tasks. 
                                
                    */

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
                                    reloadPage(response);
                                })
                        }
                        if (event.target.className === "edit-button") {
                            event.target.parentElement.parentElement.innerHTML = createForms.addEditForm(event);
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
                                reloadPage(tasks);
                            })
                        }
                    })
                })
        };

module.exports = handleTasks;