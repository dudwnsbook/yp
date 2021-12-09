let hdEvent=document.querySelector(".hd-event-wrap");
let hdEventCon=document.querySelector(".hd-event-img");
let eventClose = document.querySelector(".close-btn");

function eventBlock(){
    hdEvent.style.visibility="hidden";
    hdEvent.style.height="0";
}

// 헤드슬라이드
let hdSlideBox=document.querySelector(".hd-slide-box");
let hdSlideCon=document.querySelectorAll(".hd-slide");
let hdSlidelen= hdSlideCon.length;
let hdLeftBtn = document.querySelector(".hd-left");
let hdRightBtn = document.querySelector(".hd-right");
let numInner=document.querySelector(".num-inner");
let hdIndex=0;
let hdCurrent=0;

function hdSlide(obj){
    hdSlideBox.style.left=-100*obj+"%";
    numInner.innerHTML=obj+1;
    hdIndex=obj+1;
}
function hdAuto(){
    setInterval(function(){
        hdCurrent=(hdIndex)%hdSlidelen;
        hdSlide(hdCurrent)
    }
        ,4000);
}

hdAuto();



hdLeftBtn.addEventListener("click",function(){
    if (hdCurrent > 0) {
        hdCurrent=hdCurrent-1;

    } else {
        hdCurrent=hdSlidelen-1; 
    }
    hdSlide(hdCurrent);
})
hdRightBtn.addEventListener("click",function(){
    if(hdCurrent<2){
        hdCurrent=hdCurrent+1;
    }
    else{
        hdCurrent=0;
    }
    hdSlide(hdCurrent);
})
let searchlistBox=document.querySelector(".search-list-box");
let searchlist=document.querySelector(".search-list");
let searchTit=document.querySelector(".search-list-tit");
let list=document.querySelectorAll(".list");
let search=document.querySelector(".search-txt");
let record=document.querySelector(".record-box");

search.addEventListener('focus', function () {
    record.classList.add('view');
    searchlist.classList.remove('view');
})
search.addEventListener('blur', function () {
    record.classList.remove('view');
})
searchlistBox.addEventListener('click',function(){
    searchlist.classList.toggle('view');

})
for(var listClick=0; listClick<list.length; listClick++){
    list[listClick].addEventListener('click',function(e){
        searchTit.innerHTML=e.target.innerText;
        searchlist.classList.remove('view');
    })
}
// 베스트 셀러 BTN
let bestDay=document.querySelectorAll(".best-day");
let bestInner=document.querySelectorAll(".best-inner");

function bestListView(obj){
    for(var bestList=0; bestList<2; bestList++){
        if(obj==bestList){
            bestDay[obj].classList.add("on");
            bestInner[obj].classList.add("on");
        }
        else{
            bestDay[bestList].classList.remove("on");
            bestInner[bestList].classList.remove("on");
        }
    }
}

//스크롤 js
let attention=document.querySelector(".attention-wrap");
function attentionFix(){
    let scrollCurrent= window.pageYOffset;
    console.log(scrollCurrent);
    if(scrollCurrent>547){
        attention.classList.add("fixed");
    }
    else{
        attention.classList.remove("fixed");

    }
}
window.addEventListener("scroll",attentionFix);