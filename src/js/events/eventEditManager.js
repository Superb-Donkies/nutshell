let eventEditManager = Object.create(null, {
    saveEditedEvented: {
        value: () => {
            let editedEvent = {
                title: document.querySelector("#editedEventTitle").value,
                date: document.querySelector("#editedEventDate").value,
                location: document.querySelector("#editedEventLocation").value
            }
            return editedEvent
        }
    },
    transformEvent: {
        value: (event) => {
            let eventComponent = event.target.parentElement.parentElement;
            let eventTitle = document.querySelector(`#title--${event.target.id.split("--")[1]}`);
            let eventLocation = document.querySelector(`#location--${event.target.id.split("--")[1]}`)
            let eventDate = document.querySelector(`#date--${event.target.id.split("--")[1]}`)
            eventTitleText = eventTitle.textContent;
            eventLocationText = eventLocation.textContent;
            eventDateInput = eventDate.input;
            eventComponent.innerHTML =
                `<input type="text" value="${eventTitleText}" id="edited-event-title">
                <input type="text" value="${eventLocationText}" id="edited-event-location">
                <input type="date" value="${eventDateInput}" id="edited-event-date">
                <div class="button-container">
                    <button class="save-event-edit-btn" id="save-event-edit--${event.target.id.split("--")[1]}">Save Changes</button>
                    <button class="delete-event-btn" id="delet-event--${event.target.id.split("--")[1]}">Remove Event</button>
                </div>`
        }
    }
});

module.exports = editManager;