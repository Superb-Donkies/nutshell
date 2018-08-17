// David Taylor

// Imports relevant modules.

const DataManager = require("../data/DataManager");
const eventForm = require("./eventForm");
const eventComponent = require("./eventComponent");
const eventEditManager = require("./eventEditManager");

// Function with argument of userId renders new event button by calling the renderAddEventButton function.
// Calls the get events from data manager, passing in the userId argument,
// then each event component is rendered.

// An event listener attached to the new event button renders the event form.
// The same event listener is also attached to the save event button.

// A new variable containing the userId, title, location and date is created by the save event button.
// The event form is selected and given the value of an empty string.

// New event button is called again.
// The new variable created by the save event button is passed into the saveEvent function,
// then the getEvents function is called and passed the userId value of new event as an argument.

// Finally, the event component is given the value of an empty string
// and each event component is passed into that empty string.

function handleEvents(userId) {
    eventForm.renderAddEventButton()
    DataManager.getEvents(userId)
        .then(events => {
            events.forEach(event => {
                document.querySelector("#event-component").innerHTML += eventComponent.renderEventComponent(event);
            })
        })
    document.querySelector("#event-content").addEventListener("click", (e) => {
        if (e.target.id === "new-event-button") {
            document.querySelector("#event-form").innerHTML = eventForm.renderEventForm();
        }
        if (e.target.id === "save-event-button") {
            let newEvent = {
                userId: userId,
                title: document.querySelector("#event-title").value,
                location: document.querySelector("#event-location").value,
                date: document.querySelector("#event-date").value
            }
            document.querySelector("#event-form").innerHTML = "";
            eventForm.renderAddEventButton();
            DataManager.saveEvent(newEvent)
                .then(() => {
                    DataManager.getEvents(userId)
                        .then((events) => {
                            document.querySelector("#event-component").innerHTML = ""
                            events.forEach((event) => {
                                document.querySelector("#event-component").innerHTML += eventComponent.renderEventComponent(event)
                            })
                        })
                })
        }
    })

    // An event listener is created with three if statements given different targets,
    // one target for edit, one for delete, and once for save event edit.

    // Edit is passed the transformEvent function.

    // Delete is provided a variable defined by the number id of an event.
    // The removeEvent function is passed the variable as an argument,
    // then the parent element is deleted by the remove method.

    // Save edit is provided two variables:
    // one variable is the number id of an event;
    // the other variable defines an event by the saveEditedEvent button and passes in usedId as an argument.

    // The editEvent function is passed the two variables,
    // then the getEvents function is passed the userId,
    // then the event component is passed an empty string,
    // finally, that empty string is filled by the event component.

    document.querySelector("#event-component").addEventListener("click", (e) => {
        if (e.target.className === "edit-event-button") {
            eventEditManager.transformEvent(e);
        }
        if (e.target.className === "delete-event-button") {
            let eventId = e.target.id.split("--")[1];
            DataManager.removeEvent(eventId).then(() => {
                e.target.parentElement.parentElement.remove();
            });
        }
        if (e.target.className === "save-event-edit-button") {
            let eventId = e.target.id.split("--")[1];
            let event = eventEditManager.saveEditedEvent(userId);
            DataManager.editEvent(eventId, event)
                .then(() => {
                    DataManager.getEvents(userId)
                        .then((events) => {
                            document.querySelector("#event-component").innerHTML = "";
                            events.forEach((event) => {
                                document.querySelector("#event-component").innerHTML += eventComponent.renderEventComponent(event)
                            });
                        });
                });
        }
    });
}

// Exports function handleEvents

module.exports = handleEvents;