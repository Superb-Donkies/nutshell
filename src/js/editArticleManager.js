
let getDate = require("./getDate");

const editArticleManager = Object.create(null, {
    saveEditedArticle: {
        value: () => {
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
            let title = document.querySelector(`#title--${event.target.id.split("--")[1]}`);
            let summary = document.querySelector(`#summary--${event.target.id.split("--")[1]}`);
            let url = document.querySelector(`#url--${event.target.id.split("--")[1]}`).getAttribute("href");
            titleText = title.textContent;
            summaryText = summary.textContent;
            articleCard.innerHTML =
                `<input type="text" value="${titleText}" id="editedTitle">
                <textarea id="editedSummary">${summaryText}</textarea>
                <input type="text" value="${url}" id="editedUrl">
                <div class="button-container">
                    <button class="save-article-btn" id="save--${event.target.id.split("--")[1]}">Save Your Changes!</button>
                    <button class="delete-article-btn" id="delete--${event.target.id.split("--")[1]}">Remove This Article</button>
                </div>`
            
        }
    }
})

module.exports = editArticleManager;