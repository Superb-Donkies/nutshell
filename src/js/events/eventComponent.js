// David Taylor

// Made an event component to display on the dom using Object.create.

// Set prototype of Object.create to null.
// Set value property of Object.create to renderEventComponent, passing in a function as the value.

// Defined the function as template literal and returned it.
// Set id for each component element based on the id of the argument passed through the value.

// Defined content of elements based on dot notation of argument.databaseArrayKey.
// Set classes of div and buttons to provide basis for styling.

// The makeEventComponent variable exports to eventHandler

const makeEventComponent = Object.create(null, {
    renderEventComponent: {
        value: (object) => {
            return `<div class="event-component" id="event-component--${object.id}">
            <h4 id="event-title--${object.id}">${object.title}</h4>
            <p id="event-location--${object.id}">${object.location}</p>
            <p id="event-date--${object.id}">${object.date}</p>
            <button class="edit-event-button" id="edit-event--${object.id}">Edit</button>
            <button class="delete-event-button" id="delete-event--${object.id}">Delete</button>
            </div>
            `
        }
    }
})

module.exports = makeEventComponent