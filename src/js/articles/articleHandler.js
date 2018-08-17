/*  
    Author: Ricky Bruner  
    This Page houses all of the tasks involved with rendering a users article sections. This is one function that is called in main.js once login is either inputed or session storage is confirmed.
*/

const DataManager = require("../data/DataManager");
const articleFormManager = require("./articleForm");
const makeArticle = require("./articleCard");
const editArticleManager = require("./editArticleManager");
const getDate = require("../getDate");

function handleArticles(userId) {
    /* First, the button to add an article is rendered, and then a promise is run to grab all articles associated with the user and populate them in the articles list section.
    */
    articleFormManager.renderFormBtn();
    DataManager.getArticles(userId)
        .then((articles) => {
            articles.forEach((article) => {
                document.querySelector("#article-list").innerHTML += makeArticle(article);
            });
        });
    /*
    Next, a click event listener is placed on the entire article container to prevent removal issues once the user starts manipulating the section. The if statements do as follows:
    1st: If add article button is clicked, then render the form.
    2nd: If form submit button is clicked, then create an object out of what the user has inputed, wipe the list from the DOM, swap the form with the add form button, and save the object to the DB. Then, once that promise has resolved, re-render the article list.
    */
    document.querySelector("#article-form-container").addEventListener("click", (e) => {
        if (e.target.id === "add-article-btn") {
            articleFormManager.renderArticleForm();
        }
        if (e.target.id === "post-article") {
            let newArticle = {
                userId: userId,
                title: document.querySelector("#article-title").value,
                summary: document.querySelector("#article-summary").value,
                date: getDate(),
                url: document.querySelector("#article-url").value
            }
            document.querySelector("#article-form-container").innerHTML = "";
            articleFormManager.renderFormBtn();
            DataManager.saveArticle(newArticle)
                .then(() => {
                    DataManager.getArticles(userId)
                        .then((articles) => {
                            document.querySelector("#article-list").innerHTML = "";
                            articles.forEach((article) => {
                                document.querySelector("#article-list").innerHTML += makeArticle(article);
                            });
                        });
                });
        }
    });
    /* 
    Now an event listner is added to the article list, and handles all actions within that container. The        
    conditionals do as follows:
    1st: if the delete button is clicked, remove the article from the DB and the DOM
    2nd: if the edit button is clicked, transform the article card into an edit form
    3rd: if the save button on that form is clicked, save the changes to the DB with a "PUT" call, and then re-render the list. 
     */
    document.querySelector("#article-list").addEventListener("click", (e) => {
        if (e.target.className === "delete-article-btn") {
            let articleId = e.target.id.split("--")[1];
            DataManager.removeArticle(articleId).then(() => {
                e.target.parentElement.parentElement.remove();
            });
        }
        if (e.target.className === "edit-article-btn") {
            editArticleManager.transformArticle();
        }
        if (e.target.className === "save-article-btn") {
            let articleId = e.target.id.split("--")[1];
            let article = editArticleManager.saveEditedArticle(userId);
            DataManager.editArticle(articleId, article)
                .then(() => {
                    DataManager.getArticles(userId)
                        .then((articles) => {
                            document.querySelector("#article-list").innerHTML = "";
                            articles.forEach((article) => {
                                document.querySelector("#article-list").innerHTML += makeArticle(article);
                            });
                        });
                });
        }
    });
}

module.exports = handleArticles;