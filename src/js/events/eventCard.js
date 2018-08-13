let dataManager = require("./data/DataManager");

function makeEventCard(object) {
    document.querySelector("#event-container").innerHTML+=
    `<div class="event-card" id="event-form--${object.id}"></div>
    <div class="event-card" id="event-list--${object.id}">
    <h2 id="title--${object.id}">${object.title}</h2>
    <h4 id="date--${object.id}">${object.date}</h4>
    <h4 id="location--${object.id}">${object.location}</h4>
    </div>
    `
}