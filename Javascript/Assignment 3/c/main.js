let current = 0;
function next() {
    if(current == 2){
        current = 0;
    }else{
        current++;
    }
    document.getElementById("slideshow").setAttribute("src", images[current])
}

var timer = window.setInterval(function(){
    next();
  }, 10000);

let images = [
"images/image1.png",
"images/image2.jpg",
"images/tacobell.png"
]