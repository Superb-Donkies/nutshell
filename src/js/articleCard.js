
function makeArticle(object){
    document.querySelector("#article-list").innerHTML +=
        `<div class="article-card" id="article--${object.id}">
            <h2 id="title--${object.id}">${object.title}</h2>
            <p id="summary--${object.id}">${object.summary}</p>
            <h3 id="url--${object.id}">${object.url}</h3>
            <h5>${object.date}</h5>
            <div class="button-container">
                <button class="edit-btn" id="edit--${object.id}">Edit Article</button>
                <button class="delete-btn" id="delete--${object.id}">Delete Article</button>
            </div>
        </div>`
}