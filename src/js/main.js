const loginBuilder = require("./login/Login");
let buildDom = require("./DOMbuilder");
let articleFormManager = require("./articleForm");
let makeArticle = require("./articleCard");
let getDate = require("./getDate");
let DataManager = require("./data/DataManager");

document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
document.querySelector("#loginSubmit").addEventListener("click", () => {
    let email = document.querySelector("#loginEmail").value
    let username = document.querySelector("#loginUsername").value
    DataManager.login(email, username)
    .then(user => {
        if (user.length) {
            let userId = user[0].id;
            JSON.stringify(userId);
            sessionStorage.setItem("userId", userId)
        }
        return user
    })
    .then((user) => {
        userId = user[0].id;
        buildDom();
        articleFormManager.renderFormBtn();
        DataManager.getArticles(userId)
        .then((articles) => {
            articles.forEach((article) => {
                document.querySelector("#article-list").innerHTML += makeArticle(article);
            });
        });
        document.querySelector("#article-form-container").addEventListener("click", (e) => {
            if(e.target.id === "add-article-btn"){
                articleFormManager.renderArticleForm();
            }
            if(e.target.id === "post-article"){
                let newArticle = {
                    userId: userId,
                    title: document.querySelector("#article-title").value,
                    summary: document.querySelector("#article-summary").value,
                    date: getDate(),
                    url: document.querySelector("#article-url").value
                }
                DataManager.saveArticle(newArticle)
                .then(() => {
                    DataManager.getArticles(userId)
                    .then((articles) => {
                        articles.forEach((article) => {
                            document.querySelector("#article-list").innerHTML += makeArticle(article);
                        });
                    });
                });
            }
        });
        document.querySelector("#article-list").addEventListener("click", (e) => {
            if(e.target.className === "delete-btn"){
                let articleId = e.target.id.split("--")[1];
                DataManager.removeArticle(articleId).then(() => {
                    e.target.parentElement.parentElement.remove();
                });
            }
        })
    })
})
