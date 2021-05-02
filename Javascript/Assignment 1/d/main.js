function addStuff() {
    var text = document.getElementById('text').value;
    var div = document.createElement("div");
    var innerText = document.createElement("p");

    innerText.setAttribute("class", "w-full px-2 mx-auto h-auto text-2xl font-bold tracking-tighter text-black title-font");
    innerText.setAttribute("contenteditable", "true");
    innerText.innerHTML = text;

    div.setAttribute("class", "h-auto w-full bg-blue-300 rounded-3xl mb-5 flex justify-center");
    div.appendChild(innerText);
    document.getElementById("stuff").appendChild(div);
}