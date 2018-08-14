//// Creating the card that will show on the dom for each task 

"use strict";

function createTaskCard (event) {
    return `<div class="form-card" id="card--${event.id}">
                <h3>${event.title}</h3>
                <p>${event.completeDate}</p>
                <button class="checkbox" id="${event.id}">Delete</button>
                <div class="button-container">
                    <button class="edit-button" id="button--${event.id}">Edit</button>
                </div>
            </div>`
}

module.exports = createTaskCard;