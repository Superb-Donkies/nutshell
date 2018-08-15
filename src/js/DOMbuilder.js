

function buildDom() {
    document.querySelector("#user-page").innerHTML +=
        `<header>
        </header>
        <main>
            <div class="left-container">
                <div id="profile-content">
                </div>
                <div id="event-content">
                    <div id="event-form"></div>
                    <div id="event-component"></div>
                </div>
                <div id="task-main">
                    <div id="task-form"></div>
                    <div id="task-content"></div>
                </div> 
            </div>
            <div class="mid-container">
                <div id="article-content">
                    <div id="article-form-container"></div>
                    <div id="article-list"></div>
                </div>
            </div>
            <div class="right-container">
                <div id="messages-content">
                    <div id="message-feed"></div>
                    <div id="message-form"></div>
                    <div id="friendsSearch"></div>
                    <div id="friendBox"></div>
                </div>

                <div id="friends-content"></div>
            </div>
        </main>
        <footer>
        </footer>`
}

module.exports = buildDom;
