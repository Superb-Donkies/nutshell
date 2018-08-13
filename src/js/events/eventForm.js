const makeEventForm = Object.create(null, {
    renderEventForm: {
        value: (object) => {
            document.querySelector("#event-form").innerHTML+=
            `<button id="new-event--${object.id}">New Event</button>`
        }
    },
})

module.exports = makeEventForm