/*  
    Author: Ricky Bruner  
    This Module is an HTML representation of an article card that plugs in information from the database
*/

function makeArticle(object){
    return  `<div class="article-card" id="article--${object.id}">
                    <h2 id="title--${object.id}">${object.title}</h2>
                    <p id="summary--${object.id}">${object.summary}</p>
                    <a href="${object.url}" id="url--${object.id}" target="_blank">View the Article!</a>
                    <h5>${object.date}</h5>
                    <div class="button-container">
                        <button class="edit-article-btn" id="edit--${object.id}">Edit <i class="far fa-edit"></i></button>
                        <button class="delete-article-btn" id="delete--${object.id}">Delete <i class="far fa-times-circle"></i></button>
                    </div>
                </div>`
}

module.exports = makeArticle;