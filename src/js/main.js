const loginBuilder = require("./login/Login");
const buildDom = require("./DOMbuilder");
const articleFormManager = require("./articleForm");
const makeArticle = require("./articleCard");
const getDate = require("./getDate");
const DataManager = require("./data/DataManager");
const navbarFunctions = require("./navbar/navbar");
const registerCreator = require("./login/Register");
const editArticleManager = require("./editArticleManager");


document.querySelector("#navbar").addEventListener("click", () => {
    sessionStorage.clear()
    document.querySelector("#navbar").innerHTML = ""
    document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
})

document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()


function login() {
    document.querySelector("#loginContainer").addEventListener("click", () => {
        let typeClickedOn = event.target.id
        if (typeClickedOn === "loginSubmit") {
            let email = document.querySelector("#loginEmail").value
            let username = document.querySelector("#loginUsername").value
            DataManager.login(email, username)
                .then(user => {
                    if (user.length) {
                        let userId = user[0].id
                        sessionStorage.setItem("userId", userId)
                    }
                    return user
                }).then(user => {
                    document.querySelector("#navbar").innerHTML = navbarFunctions.navbarBuilder();
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
                                    document.querySelector("#article-list").innerHTML = "";
                                    articles.forEach((article) => {
                                        document.querySelector("#article-list").innerHTML += makeArticle(article);
                                    });
                                });
                            });
                        }
                    });
                    document.querySelector("#article-list").addEventListener("click", (e) => {
                        if(e.target.className === "delete-article-btn"){
                            let articleId = e.target.id.split("--")[1];
                            DataManager.removeArticle(articleId).then(() => {
                                e.target.parentElement.parentElement.remove();
                            });
                        }
                        if(e.target.className === "edit-article-btn"){
                            editArticleManager.transformArticle();
                        }
                        if(e.target.className === "save-article-btn"){
                            let articleId = e.target.id.split("--")[1];
                            let article = editArticleManager.saveEditedArticle();
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
            });
        }
        else if (typeClickedOn === "register") {
            document.querySelector("#loginContainer").innerHTML = ""
            document.querySelector("#loginContainer").innerHTML = registerCreator.registerForm()
            document.querySelector("#registerSubmit").addEventListener("click", () => {
                let email = document.querySelector("#registerEmail").value;
                let username = document.querySelector("#registerUsername").value;
                DataManager.register(email, username)
                .then(() => {
                    document.querySelector("#loginContainer").innerHTML = ""
                    document.querySelector("#loginContainer").innerHTML = loginBuilder.loginForm()
                })
            })
        }
    })
}
login()

