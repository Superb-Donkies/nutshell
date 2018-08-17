/*
    Author: Ricky Bruner
    Purpose: Build DOM structure for user-page once called
*/

function buildDom() {
    document.querySelector("#user-page").innerHTML +=
        `<header>
        </header>
        <main>
            <div class="left-container">
                <div id="profile-content">
                    <div id="profile-display"></div>
                    <div id="profile-form"></div>
                </div>
                <h2 class="section-header"><i class="far fa-calendar-alt"></i> Upcoming Events</h2>
                <div id="event-content">
                    <div id="event-form"></div>
                    <div class="event-list-container" id="event-component"></div>
                </div>
                <h2 class="section-header"><i class="fas fa-tasks"></i> To-Do List</h2>
                <div id="task-main">
                    <div id="task-form"></div>
                    <div id="task-content"></div>
                </div> 
            </div>
            <div class="mid-container">
                <h2 class="section-header"><i class="fas fa-globe-americas"></i> NewsFeed</h2>
                <div id="article-content">
                    <div id="article-form-container"></div>
                    <div id="article-list"></div>
                </div>
            </div>
            <div class="right-container">
                <h2 class="section-header"><i class="far fa-comments"></i> Community Chat</h2>
                <div id="messages-content">
                    <div id="message-feed"></div>
                    <div id="message-form"></div>
                </div>
                <h2 class="section-header"><i class="fas fa-user-friends"></i> Friends List</h2>
                <div id="friends-content">
                    <div id="friendsSearch"></div>
                    <div id="friendBox"></div>
                </div>
            </div>
        </main>
        <footer>
        </footer>`
}

module.exports = buildDom;
