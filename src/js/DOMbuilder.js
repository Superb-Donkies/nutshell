

function buildDom(){
    const body = document.querySelector("body");
    const script = document.querySelector("script");
    const mainContainer = document.createElement("div");
    mainContainer.setAttribute("id", "wrapper");
    body.insertBefore(mainContainer, script);
    document.querySelector("#wrapper").innerHTML +=
        `<header>
        </header>
        <main>
            <div class="left-container">
                <div id="profile-content"></div>
                <div id="event-content"></div>
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
                <div id="messages-content"></div>
                <div id="friends-content"></div>
            </div>
        </main>
        <footer>
        </footer>`
}

// function buildDom(){
//     document.querySelector("body").innerHTML +=
//         `<div class="wrapper">
//             <header>
//             </header>
//             <main>
//                 <div class="left-container">
//                     <div id="profile-content"></div>
//                     <div id="event-content"></div>
//                     <div id="task-content"></div>
//                 </div>
//                 <div class="mid-container">
//                     <div id="article-content"></div>
//                 </div>
//                 <div class="right-container">
//                     <div id="messages-content"></div>
//                     <div id="friends-content"></div>
//                 </div>
//             </main>
//             <footer>
//             </footer>
//         </div>`
// }

module.exports = buildDom;