
let buildDom = require("./DOMbuilder");
const tasksToDom = require("./tasks/mainTasks");
const getData = require("./data/DataManager");
const taskCard = require("./tasks/tasksCard")


buildDom();
tasksToDom();

document.querySelector("#task-content").addEventListener("click", (event) => {
    if (event.target.className === "checkbox") {
        getData.deleteTask(event.target.id)
            .then(() => {
                return getData.getTasks()

            })
            .then(response => {
                    document.querySelector("#task-content").innerHTML = "";
                        response.forEach(task => {
                            document.querySelector("#task-content").innerHTML += taskCard(task)

                        })
                    })
    }
})