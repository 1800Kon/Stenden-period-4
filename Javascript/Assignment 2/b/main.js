function performOperation() {
    var no1 = document.getElementById("no1").value;
    var no2 = document.getElementById("no2").value;
    var result;

    switch (document.getElementById("action").value) {
        case "+":
            result = +no1 + +no2;
            break;
        case "-":
            result = +no1 - +no2;
            break;
        case "*":
            result = +no1 * +no2;
            break;
        case "/":
            result = +no1 / +no2;
            break;
    }
    var h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center mx-auto my-5 font-bold tracking-tighter text-black sm:text-5xl title-font");
    h1.innerHTML = result;
    document.getElementById("putStuffHere").appendChild(h1);
}