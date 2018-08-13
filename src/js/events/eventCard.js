const makeEventlist = Object.create(null, {
    renderEventList: {
        value: (object) => {
            document.querySelector("#event-list").innerHTML+=
            `
            <div class="event-card" id="event-list--${object.id}">
            <h2 id="title--${object.id}">${object.title}</h2>
            <h4 id="date--${object.id}">${object.date}</h4>
            <h4 id="location--${object.id}">${object.location}</h4>
            <button id="edit-event--${object.id}">Edit</button>
            </div>
            `
        }
    }
})

module.exports = makeEventlist