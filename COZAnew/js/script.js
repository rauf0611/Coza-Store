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

var modal =document.querySelector('.modal-body');
var imgSrc = document.querySelectorAll(".productImages img");



let product = new XMLHttpRequest();
product.open("get","js/product.json",false);
product.send();
let txt = JSON.parse(product.responseText);
for (var index = 0; index < txt.length; index++) {
   let oneProduct ='<div class="col-md-4">\
   <div class="bannerBox">\
       <img src="'+txt[index].ProductPhoto+'" data-toggle="modal" data-target="#exampleModalCenter">\
       <h3>Women</h3>\
       <p>Spring 2018</p>\
       <a href="">\
           <h5 class="shopNow">Shop Now</h5>\
       </a>\
   </div>\
</div>'
    $(".banner").append(oneProduct);
}

let product1 = new XMLHttpRequest();
product1.open("get","js/product1.json",false);
product1.send();
let txt1 = JSON.parse(product1.responseText);
for (var index = 0; index < txt1.length; index++) {
   let Product ='<div class="col-md-3" data-toggle="modal" data-target="#exampleModalCenter">\
   <img src="'+txt1[index].ProductPhoto+'" alt="">\
   <h5>'+txt1[index].ProductName+'</h5>\
   <h6>$19.99</h6>\
   </div>'
    $(".productImages").append(Product);
}



