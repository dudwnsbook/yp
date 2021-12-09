let banMainBox = document.querySelector(".main-banner-box");
let banSlideBox = document.querySelector(".banner-slide-box");
let banSlideCon = document.querySelectorAll(".banner-slide-con");
let banSlidelen = banSlideCon.length;
let banLeftBtn = document.querySelector(".btn_left");
let banRightBtn = document.querySelector(".btn_right");
var banIndex = 0;
var banCurrent = 0;
let banStart;

let todayBox = document.querySelector(".today-wrap");
let todayslideBox = document.querySelector(".today-slide-box");
let todayslideCon = document.querySelectorAll(".today-slide-con");
let todaySlideLen = todayslideCon.length;
let todayLeftBtn = document.querySelector(".today-leftBtn");
let todayRightBtn = document.querySelector(".today-rightBtn");
var todayIndex = 0;
var todayCurrent;
let todayStart;

let slideWay = true;

function banSlide(obj) {
    banSlideBox.style.left = (-100 * obj) + "%";
    banIndex = obj;
}

function banAuto() {
    banStart = setInterval(function () {
        banCurrent = (banIndex + 1) % banSlidelen;
        banSlide(banCurrent)
    }, 4000);
}

function todaySlide(obj) {
    todayslideBox.style.left = (-100 * obj) + "%";
    todayIndex = obj;
}

function todayAuto() {
    todayStart = setInterval(function () {
        todayCurrent = (todayIndex + 1) % todaySlideLen;
        todaySlide(todayCurrent);
    }, 6000);
}





banLeftBtn.addEventListener("click",
    function () {
        slideWay = true;
        slideLeftButton();
    }
)
banRightBtn.addEventListener("click", function () {
    slideWay = true;
    slideRightButton();
})
todayLeftBtn.addEventListener("click",
    function () {
        slideWay = false;
        slideLeftButton();
    })
todayRightBtn.addEventListener("click",
    function () {
        slideWay = false;
        slideRightButton();
    })

function slideLeftButton() {
    if (slideWay) {
        if (banCurrent > 0) {

            banCurrent = banCurrent - 1;
        } else {


            banCurrent = banSlidelen - 1;
        }
        banSlide(banCurrent);

    } else {
        if (todayCurrent > 0) {

            todayCurrent = todayCurrent - 1;
        } else {


            todayCurrent = todaySlideLen - 1;
        }
        todaySlide(todayCurrent);

    }
}


function slideRightButton() {
    if (slideWay) {
        if (banCurrent < banSlidelen - 1) {
            banCurrent++;
    
        } else {
            banCurrent = 0;
        }
        banSlide(banCurrent);

    } else {
        if (todayCurrent < todaySlideLen - 1) {
            todayCurrent++;
    
        } else {
            todayCurrent = 0;
        }
        todaySlide(todayCurrent);

    }
}



banMainBox.addEventListener("mouseenter", function () {
    clearInterval(banStart);
})
banMainBox.addEventListener("mouseleave", function () {
    banAuto();
})

function mouseHover(a) {

    banSlide(a);
}
banAuto();
todayAuto();