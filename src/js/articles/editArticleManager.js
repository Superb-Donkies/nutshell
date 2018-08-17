/*  
    Author: Ricky Bruner  
    This Module houses two functions. The first returns a new object built from changes a user makes on a form during the edit process. The second function transforms an article card into a form, using the text content that was the prior as values in the inputs.
*/

let getDate = require("./../getDate");

const editArticleManager = Object.create(null, {
    saveEditedArticle: {
        value: (userId) => {
            let editedArticle = {
                userId: userId,
                title: document.querySelector("#editedTitle").value,
                summary: document.querySelector("#editedSummary").value,
                date: `edited on: ${getDate()}`,
                url: document.querySelector("#editedUrl").value
            }
            console.log(editedArticle);
            return editedArticle;
        }
    },
    transformArticle: {
        value: () => {
            let articleCard = event.target.parentElement.parentElement;
            let title = document.querySelector(`#title--${event.target.id.split("--")[1]}`).textContent;
            let summary = document.querySelector(`#summary--${event.target.id.split("--")[1]}`).textContent;
            let url = document.querySelector(`#url--${event.target.id.split("--")[1]}`).getAttribute("href");
            articleCard.innerHTML =
                `<input type="text" value="${title}" id="editedTitle">
                <textarea id="editedSummary">${summary}</textarea>
                <input type="text" value="${url}" id="editedUrl">
                <div class="button-container">
                    <button class="save-article-btn" id="save--${event.target.id.split("--")[1]}">Save <i class="far fa-save"></i></button>
                    <button class="delete-article-btn" id="delete--${event.target.id.split("--")[1]}">Delete <i class="far fa-times-circle"></i></button>
                </div>`
        }
    }
})

module.exports = editArticleManager;