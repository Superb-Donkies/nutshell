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