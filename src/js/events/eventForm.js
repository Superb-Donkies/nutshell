const makeEventForm = Object.create(null, {
    renderAddEventBtn: {
        value: () => {
            document.querySelector("#event-form").innerHTML = `<button id="new-event-btn">New Event</button>`
        }
    },
    renderEventForm: {
        value: () => {
            return `
                <fieldset class="event-form-field">
                    <label for="event-title">Title</label>
                    <input required type="text" id="event-title" placeholder="What're you doing?">
                </fieldset>
                <fieldset class="event-location-field">
                    <label for="event-location">Location</label>
                    <input required type="text" id="event-location" placeholder="Where are you doing it?">
                </fieldset>
                <fieldset class="event-date-field">
                    <label for="event-date">Date</label>
                    <input required type="date" id="event-date">
                </fieldset>
                <button id="save-event-button">Save Event</button>`
        }
    }
})

module.exports = makeEventForm