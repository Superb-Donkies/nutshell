////The HTML representation of the Task Form 

"use strict";

function createForm () {
    return `<form>
                <fieldset class="task">
                    <label>Task</label>
                    <input type="text" id="task-entry" placeholder="What do you want to do?">
                </fieldset>
                <fieldset class="complete-date">
                    <label>Complete Date</label>
                    <input type="date" id="date-entry">
                </fieldset>
            </form>`
}

module.exports = createForm;

