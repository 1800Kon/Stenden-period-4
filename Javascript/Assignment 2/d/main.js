var i = 100;
while (i > 0) {
    if (i == 1) {
        document.write(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it around, ")
        i--;
        document.write(i + " bottles of beer on the wall." + "<br>")
    } else {
        document.write(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, ")
        i--;
        document.write(i + " bottles of beer on the wall." + "<br>")
    }
}