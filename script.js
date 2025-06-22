function createcard(title, cName, views, months, duration,thumbnail) {
        let viewStr
        if (views < 1000) {
                viewStr = views;
        }
        else if (views > 1000000) {
                viewStr = views / 1000000 + "M";
        }
        else {
                viewStr = views / 1000 + "K";
        }
        let html = `<div class="container">
        <div class="part">
            <div class="video">
                <div class="thumbnail">
                    <img src="${thumbnail}" alt="">
                    <h3>${duration}</h3>
                </div>
            </div>
            <div class="info">
                <div class="title">
                    <h2>${title}</h2>
                </div>
                <div class="other">
                        <span> ${cName}</span>|<span>${viewStr} views</span>|<span>${months} Months ago</span>
                </div>
            </div>
        </div>
    </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createcard("React course | Welcome to new video of Api generation | Video #2", "JavascriptTutorials", 56000, 4, "25:00","https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg")
createcard("React course | Welcome to new video of Api generation | Video #2", "JavascriptTutorials", 56000, 4, "25:00","https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg")
createcard("React course | Welcome to new video of Api generation | Video #2", "JavascriptTutorials", 56000, 4, "25:00","https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg")
createcard("React course | Welcome to new video of Api generation | Video #2", "JavascriptTutorials", 56000, 4, "25:00","https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg")
