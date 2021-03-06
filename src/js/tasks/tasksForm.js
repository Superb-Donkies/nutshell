// Author: Alejandro Font
// The HTML representation of the Task Forms

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
                            <div class="button-container">
                                <button id="leave-task-form">Go Back</button>
                                <button id="save-task">Save Task</button>
                            </div>
                        </fieldset> 
                    </div>`
        }
    },
    addEditForm: {
        value: (event) => {
            return `<div id="edit-task-form">
                        <fieldset class="task">
                            <label>Task</label>
                            <input type="text" id="task-entry" value="${document.querySelector(`#task-title--${event.target.id.split("--")[1]}`).textContent}">
                        </fieldset>
                        <fieldset class="complete-date">
                            <label>Complete Date</label>
                            <input type="date" id="date-entry" value="${document.querySelector(`#task-date--${event.target.id.split("--")[1]}`).textContent}">
                        </fieldset>
                        <fieldset>
                            <button class="edit-save-task"><i class="far fa-save"></i> Save</button>
                        </fieldset> 
                    </div>`
        }
    }
})

module.exports = createForms;

