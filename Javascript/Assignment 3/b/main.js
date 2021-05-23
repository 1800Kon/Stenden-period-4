let current = 0;
function previous() {
    if(current == 0){
        current = 2;
    }else{
        current--;
    }
    document.getElementById("slideshow").setAttribute("src", images[current])
}
function next() {
    if(current == 2){
        current = 0;
    }else{
        current++;
    }
    document.getElementById("slideshow").setAttribute("src", images[current])
}

let images = [
"images/image1.png",
"images/image2.jpg",
"images/tacobell.png"
]