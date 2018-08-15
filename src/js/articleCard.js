
function makeArticle(object){
    return  `<div class="article-card" id="article--${object.id}">
                <h2 id="title--${object.id}">${object.title}</h2>
                <p id="summary--${object.id}">${object.summary}</p>
                <a href="${object.url}" id="url--${object.id}" target="_blank">View the Article!</a>
                <h5>${object.date}</h5>
                <div class="button-container">
                    <button class="edit-article-btn" id="edit--${object.id}">Edit Article</button>
                    <button class="delete-article-btn" id="delete--${object.id}">Delete Article</button>
                </div>
            </div>`
}

module.exports = makeArticle;