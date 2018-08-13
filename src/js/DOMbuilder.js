

function buildDom(){
    document.querySelector("body").innerHTML +=
        `<div class="wrapper">
            <header>
            </header>
            <main>
                <div class="left-container"></div>
                <div class="mid-container"></div>
                <div class="right-container"></div>
            </main>
            <footer>
            </footer>
        </div>`
}

module.exports = buildDom;