var nextBtn = document.querySelector('.fa-chevron-right');
var prevBtn = document.querySelector('.fa-chevron-left');
var lenta = document.querySelector('.lenta');
var inners = document.querySelectorAll('.lenta .inner');
var navs = document.querySelectorAll('.navs ul li');

var activeIndex = 0;

nextBtn.addEventListener("click", function () {  
    Slide("right");
})

prevBtn.addEventListener("click", function () {  
    Slide("left");
})

document.addEventListener("keyup", function (e) {  
    if(e.keyCode == 39){
        Slide("right")
    }else if(e.keyCode == 37){
        Slide("left");
    }
})

for(var nav of navs){
    nav.addEventListener("click", function () {  
        var oldActiveIndex = activeIndex;
        activeIndex = parseInt(this.getAttribute("data-index"));
        
        if(activeIndex > oldActiveIndex){
            activeIndex--;
            Slide("right");
        }else{
            activeIndex++;
            Slide("left");
        }

        var activeSpan = document.querySelector('.navs li.active');
        activeSpan.classList.remove('active');
        this.classList.add('active');
    })
}

function Slide(dir) {  
    if(dir == "right"){
        activeIndex++;
        if(activeIndex == inners.length){
            activeIndex = 0;
        }
    }else if(dir == "left"){
        activeIndex--;
        if(activeIndex == -1){
            activeIndex = inners.length-1;
        }
    }

    lenta.style.left = -activeIndex * 1700 + "px";
}




