const DataManager = require("../data/DataManager");
const eventForm = require("./eventForm");
const eventComponent = require("./eventComponent");
const eventEditManager = require("./eventEditManager");

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

module.exports = handleEvents;