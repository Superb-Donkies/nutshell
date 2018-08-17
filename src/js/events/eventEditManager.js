// David Taylor

// Created event edit functionaltiy using Object.create.
// Set prototype of object to null.
// Gave the Object.create two property values.

// One value saves the edited event as an object inside a function.
// The argument of userId is passed into the function and used as a value for one of the keys within the created object.

// The other value transforms the event into the edited event.
// An argument of event is passed into the function that transforms the event.
// That argument's parent element is targeted and turned into a variable.

// Three subsequent variables are defined by the number id given to each post.
// The text data inside those numbered id's is targeted with .textContent.

// innerHTML adds a template literal to the parent element variable delcated at the beginning of the transformEvent function.
// Input fields are added the template string, each with a value directly related to the three variables with numbered id's.

// A button is added to the end of the template literal.
// The button id is also defined by the number id given to each post.

// The eventEditManager variable exports to eventHandler

let eventEditManager = Object.create(null, {
    saveEditedEvent: {
        value: (userId) => {
            let editedEvent = {
                userId: userId,
                title: document.querySelector("#edited-event-title").value,
                location: document.querySelector("#edited-event-location").value,
                date: document.querySelector("#edited-event-date").value
            }
            return editedEvent
        }
    },
    transformEvent: {
        value: (event) => {
            let eventComponent = event.target.parentElement.parentElement
            let eventTitle = document.querySelector(`#event-title--${event.target.id.split("--")[1]}`).textContent;
            let eventLocation = document.querySelector(`#event-location--${event.target.id.split("--")[1]}`).textContent;
            let eventDate = document.querySelector(`#event-date--${event.target.id.split("--")[1]}`).textContent;
            eventComponent.innerHTML =
                `<input type="text" value="${eventTitle}" id="edited-event-title">
                <input type="text" value="${eventLocation}" id="edited-event-location">
                <input type="date" value="${eventDate}" id="edited-event-date">
                <div class="button-container">
                    <button class="save-event-edit-button" id="save-event-edit--${event.target.id.split("--")[1]}">Save Changes</button>
                </div>`
        }
    }
});

module.exports = eventEditManager