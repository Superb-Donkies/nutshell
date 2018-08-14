const makeEventComponent = Object.create(null, {
    renderEventComponent: {
        value: (object) => {
            return `<div class="event-component" id="event-component--${object.id}">
            <h2 id="event-title--${object.id}">${object.title}</h2>
            <h4 id="event-location--${object.id}">${object.location}</h4>
            <h4 id="event-date--${object.id}">${object.date}</h4>
            <button id="edit-event-button--${object.id}">Edit</button>
            <button id="delete-event-button--${object.id}">Delete</button>
            </div>
            `
        }
    }
})

module.exports = makeEventComponent