let eventEditManager = Object.create(null, {
    saveEditedEvent: {
        value: (userId) => {
            let editedEvent = {
                userId: userId,
                title: document.querySelector("#edited-event-title").value,
                location: document.querySelector("#edited-event-location").value,
                date: document.querySelector("#edited-event-date").value
            }
            return editedEvent
        }
    },
    transformEvent: {
        value: (event) => {
            let eventComponent = event.target.parentElement;
            let eventTitle = document.querySelector(`#event-title--${event.target.id.split("--")[1]}`);
            let eventLocation = document.querySelector(`#event-location--${event.target.id.split("--")[1]}`)
            let eventDate = document.querySelector(`#event-date--${event.target.id.split("--")[1]}`)
            eventTitleText = eventTitle.textContent;
            eventLocationText = eventLocation.textContent;
            eventDateText = eventDate.textContent;
            eventComponent.innerHTML =
                `<input type="text" value="${eventTitleText}" id="edited-event-title">
                <input type="text" value="${eventLocationText}" id="edited-event-location">
                <input type="date" value="${eventDateText}" id="edited-event-date">
                <div class="button-container">
                    <button class="save-event-edit-button" id="save-event-edit--${event.target.id.split("--")[1]}">Save Changes</button>
                </div>`
        }
    }
});

module.exports = eventEditManager