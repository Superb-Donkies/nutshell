// David Taylor

// Creates event form using Object.create.
// Sets prototype of object to null.
// Gives the Object.create two property values.

// One value renders the button to create an event form.
// The other value renders the form after the button is pressed.
// Both values operate as functions.

// First value places button inside the div with the id of "element-form" on the DOMBuilder through document.queryseletor
// Second value creates the event form through function by returning a template literal.

// Template literal builds fieldsets, each having a title, input and placeholder, except date.
// Save button attached to the bottom of the event form.

// The makeEventForm variable exports to eventHandler 


const makeEventForm = Object.create(null, {
    renderAddEventButton: {
        value: () => {
            document.querySelector("#event-form").innerHTML = `<button id="new-event-button"><i class="far fa-plus-square"></i> New Event</button>`
        }
    },
    renderEventForm: {
        value: () => {
            return `<div id="add-event-form">
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
                        <fieldset class="event-time-field">
                            <label for="event-time">Time</label>
                            <input type="time" required id="event-time">
                        </fieldset>
                        <div class="button-container">
                            <button id="save-event-button">Save Event</button>
                            <button id="leave-event-form">Go Back</button>
                        </div>
                    </div>`
        }
    }
})

module.exports = makeEventForm