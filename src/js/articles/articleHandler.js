const DataManager = require("../data/DataManager");
const articleFormManager = require("./articleForm");
const makeArticle = require("./articleCard");
const editArticleManager = require("./editArticleManager");
const getDate = require("../getDate");

function handleArticles(userId) {
    articleFormManager.renderFormBtn();
    DataManager.getArticles(userId)
        .then((articles) => {
            articles.forEach((article) => {
                document.querySelector("#article-list").innerHTML += makeArticle(article);
            });
        });
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