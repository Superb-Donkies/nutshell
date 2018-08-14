"use strict";

const getData = require("../data/DataManager");
const taskCard = require("./tasksCard");
const createForm = require("./tasksForm");


////targeting the task content area

let taskContent = document.querySelector("#task-content");



/////////////Button at the top of the Tasks Area

function addButton () {
    document.querySelector("#task-form").innerHTML = `<button id="add-task">Add Task</button>`;
}


const promiseMe = 
    getData.getTasks()
    .then(response => {
        addButton();
        response.forEach(task => {
            if (task.completion === false) {
            document.querySelector("#task-content").innerHTML += taskCard(task)
            }
        })
    })


//////


function putToDom () {

    ////////////Putting the form onto the Page.


    promiseMe
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
                    }
                   getData.saveTask(newTask) 
                } 
            })
    })
        
}

//hjgvmjhf,jhfjh,fc,jhf




// document.querySelector("#task-content").addEventListener("click", (event) => {
//     if (event.target.className === "checkbox") {
//         let newObject = {
//             completion: true
//         }
//         let taskId = event.target.id.split("--")[1];
//         getData.patchTaskButton(taskId, newObject)
//             .then(() => {
//                 return getData.getTasks()

//             })
//             .then(response => {
//                     document.querySelector("#task-content").innerHTML = "";
//                         response.forEach(task => {
//                             if (task.completion === false) {
//                                 document.querySelector("#task-content").innerHTML += taskCard(task)
//                                 }
//                         })
//                     })
//     }
// })







module.exports = putToDom;