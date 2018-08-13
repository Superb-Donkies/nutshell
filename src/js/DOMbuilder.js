

function buildDom(){
    document.querySelector("body").innerHTML +=
        `<div class="wrapper">
            <header>
            </header>
            <main>
                <div class="left-container">
                    <div id="profile-content"></div>
                    <div id="event-content">
                        <div id="event-form"></div>
                        <div id="event-list"></div>
                    </div>
                    <div id="task-content"></div>
                </div>
                <div class="mid-container">
                    <div id="article-content"></div>
                </div>
                <div class="right-container">
                    <div id="messages-content"></div>
                    <div id="friends-content"></div>
                </div>
            </main>
            <footer>
            </footer>
        </div>`
}

module.exports = buildDom;