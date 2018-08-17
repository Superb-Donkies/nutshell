const makeEventComponent = Object.create(null, {
    renderEventComponent: {
        value: (object) => {
            return `<div class="event-component" id="event-component--${object.id}">
                        <h3 id="event-title--${object.id}">${object.title}</h3>
                        <h5 id="event-location--${object.id}">${object.location}</h5>
                        <h5 id="event-date--${object.id}">${object.date}</h5>
                        <div class="button-container">
                            <button class="edit-event-button" id="edit-event--${object.id}">Edit <i class="far fa-edit"></i></button>
                            <button class="delete-event-button" id="delete-event--${object.id}">Delete <i class="far fa-times-circle"></i></button>
                        </div>
                    </div>`
        }
    }
})

module.exports = makeEventComponent