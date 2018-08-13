
const DataManager = Object.create(null, {
    login: {
        value: () => {
        }
    },
    getArticles: {
        value: () => {
            return fetch("http://localhost:8088/articles")
            .then(res => res.json())
        }
    },
    saveArticle: {
        value: (article) => {
            return fetch("http://localhost:8088/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
            .then(result => result.json())
        }
    },
    removeArticle: {
        value: (articleId) => {
            return fetch(`http://localhost:8088/articles/${articleId}`, {
                method: "Delete"
            }).then(result => result.json())
        }
    },
    editArticle: {
        value: (articleId, article) => {
            return fetch(`http://localhost:8088/articles/${articleId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(article)
            })
            .then(result => result.json())
        }
    }
});

module.exports = DataManager;