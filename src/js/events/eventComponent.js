// David Taylor

// Makes an event component to display on the dom using Object.create.

// Sets prototype of Object.create to null.
// Sets value property of Object.create to renderEventComponent, passing in a function as the value.

// Defines the function as template literal and returned it.
// Sets id for each component element based on the id of the argument passed through the value.

// Defines content of elements based on dot notation of argument.databaseArrayKey.
// Sets classes of div and buttons to provide basis for styling.

// The makeEventComponent variable exports to eventHandler

const makeEventComponent = Object.create(null, {
    renderEventComponent: {
        value: (object) => {
            return `<div class="event-component" id="event-component--${object.id}">
                        <h5 class="event-date" id="event-date--${object.id}">${object.date.split("-")[1]} / ${object.date.split("-")[0]}</h5>
                        <h5 class="event-day" id="event-day--${object.id}">${object.date.split("-")[2]}</h5>
                        <h3 class="event-title" id="event-title--${object.id}">${object.title}</h3>
                        <h5 class="event-location" id="event-location--${object.id}">${object.location}</h5>
                        <h5 class="event-time" id="event-time--${object.id}">${object.time}</h5>
                        <div class="button-container">
                            <button class="edit-event-button" id="edit-event--${object.id}"><i class="far fa-edit"></i> Edit</button>
                            <button class="delete-event-button" id="delete-event--${object.id}"><i class="far fa-times-circle"></i> Delete</button>
                        </div>
                    </div>`
        }
    }
});

module.exports = makeEventComponent