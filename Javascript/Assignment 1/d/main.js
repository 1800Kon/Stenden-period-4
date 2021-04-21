function addStuff(){
    var text = document.getElementById('text').value
    var div = document.createElement("div")
    div.innerHTML = text
    div.setAttribute("class", "h-20 w-full bg-blue-300 rounded-3xl mb-5")
    document.getElementById("stuff").appendChild(div)
}