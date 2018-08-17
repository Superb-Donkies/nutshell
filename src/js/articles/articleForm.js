/*  
    Author: Ricky Bruner  
    This Module houses two functions. The first places a button that will render a form and the second sets the form in the form container
*/

const articleFormManager = Object.create(null, {
    renderFormBtn: {
        value: () => {
            document.querySelector("#article-form-container").innerHTML =
                `<button id="add-article-btn">Add A New Article</button>`
        }
    },
    renderArticleForm: {
        value: () => {
            document.querySelector("#article-form-container").innerHTML =
            `<div class="article-form">
                <input id="article-title" placeholder="Article Title">
                <textarea id="article-summary" placeholder="Summary of Article"></textarea>
                <input id="article-url" placeholder="Paste a link to your article here">
                <button id="post-article">Post Article</button>
            </div>`
        }
    }
});


module.exports = articleFormManager;