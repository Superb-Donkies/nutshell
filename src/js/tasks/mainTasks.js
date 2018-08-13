"use strict";

const getData = require("../data/DataManager");
const taskCard = require("./tasksCard");
const createForm = require("./tasksForm");

const promiseMe = 
    getData.getTasks()
    .then(response => {
        response.forEach(task => {
            document.querySelector("#task-content").innerHTML += taskCard(task)

        })
    })


function putToDom () {
    promiseMe
    .then(() => {
        document.querySelector("#task-content").innerHTML += createForm()
        })
}

module.exports = putToDom;