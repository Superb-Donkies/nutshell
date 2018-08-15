//// Creating the card that will show on the dom for each task 

"use strict";

function createTaskCard (event) {
    return `<div class="task-card" id="card--${event.id}">
                <h3>${event.title}</h3>
                <p>${event.completeDate}</p>
                <input type="checkbox" class="checkbox" id="checkbox--${event.id}">
                <div class="button-container">
                    <button class="edit-button" id="button--${event.id}">Edit</button>
                </div>
            </div>`
}

module.exports = createTaskCard;