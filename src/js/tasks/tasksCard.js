//// Creating the card that will show on the dom for each task 

"use strict";

function createTaskCard (event) {
    return `<div class="postit-top"></div>
            <div class="postit" id="card--${event.id}">
                <h3 id="task-title--${event.id}">${event.title}</h3>
                <p id="task-date--${event.id}">${event.completeDate}</p>
                <p>Finished Task? <input type="checkbox" class="checkbox" id="checkbox--${event.id}"></p>
                
                <div class="button-container">
                    <button class="edit-button" id="button--${event.id}">Edit <i class="far fa-edit"></i></button>
                </div>
            </div>`
}

module.exports = createTaskCard;