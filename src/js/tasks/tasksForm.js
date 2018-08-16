////The HTML representation of the Task Form 

"use strict";


const createForms = Object.create(null, {
    addTaskForm: {
        value: () => {
            return `<div id="form">
                <fieldset class="task">
                    <label>Task</label>
                    <input type="text" id="task-entry" placeholder="What do you want to do?">
                </fieldset>
                <fieldset class="complete-date">
                    <label>Complete Date</label>
                    <input type="date" id="date-entry">
                </fieldset>
                <fieldset>
                    <button id="save-task">Save Task</button>
                </fieldset> 
            </div>`
        }
    },
    addEditForm: {
        value: () => {
            return `<div id="edit-task-form">
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
                    </div>`
        }
    }
})

module.exports = createForms;

