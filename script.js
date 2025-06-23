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
createcard("React course | Youtube video layout sample using function | Video #2", "JavascriptTutorials", 56000, 4, "25:00","https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg")
createcard("MongoDB course | Youtube video layout sample using function | Video #3", "JavascriptTutorials", 61000, 3, "33:10","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrV5rgO6meF6AoHwYRNz_nmWtD4_-1FMIr2w&s")
createcard("Nodejs course | Youtube video layout sample using function | Video #4", "JavascriptTutorials", 73000, 3, "43:13","https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")
createcard("Tech course | Youtube video layout sample using function | Video #n", "JavascriptTutorials", 0, 3, "00:00","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9CT45hJG68DUEmOcmPiehu9pH_Rp-IpPPQ&s")

