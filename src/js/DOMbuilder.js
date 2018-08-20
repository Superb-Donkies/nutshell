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
            </div>
            <div class="mid-container">
                <div id="article-content">
                    <h2 class="section-header"><i class="fas fa-globe-americas"></i> NewsFeed</h2>
                    <div id="article-form-container"></div>
                    <div id="article-list"></div>
                </div>
                <div id="event-content">
                    <h2 class="section-header"><i class="far fa-calendar-alt"></i> Upcoming Events</h2>
                    <div id="event-form"></div>
                    <div class="event-list-container" id="event-component"></div>
                </div>
                <div id="task-main">
                    <h2 class="section-header"><i class="fas fa-tasks"></i> To-Do List</h2>
                    <div id="task-form"></div>
                    <div id="task-content"></div>
                </div> 
            </div>
            <div class="right-container">
                <div id="messages-content">
                    <h2 class="section-header"><i class="far fa-comments"></i> Community Chat</h2>
                    <div id="message-feed"></div>
                    <div id="message-form"></div>
                </div>
                <div id="friends-content">
                    <h2 class="section-header"><i class="fas fa-user-friends"></i> Friends List</h2>
                    <div id="friendsSearch"></div>
                    <div id="friendBox"></div>
                </div>
            </div>
        </main>
        <footer>
        </footer>`
}

module.exports = buildDom;
