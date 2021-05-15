function doStuff(){
    var text = document.getElementById("text").value
    var reverse = text.split("").reverse().join("");
    if(text == reverse){
        document.getElementById("result").innerHTML = "It's a palindrome."
    }else{
        document.getElementById("result").innerHTML = "It's not a palindrome."
    }
    
}