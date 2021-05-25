window.onload = function () {
    var addHere = document.getElementById("container")

    function numbers(n) {
        var first = 0
        var second = 1
        addHere.innerHTML += '<div class="h-10 w-10 bg-green-100">' + first + '</div>';
        if (n <= 1)
            return null; // Return null when the root is reached
    
        for (i = 1; i < n; i++) {
            addHere.innerHTML += '<div class="h-10 w-10 bg-green-100">' + second + '</div>';
            var next = first + second; // Calculates the next number in the loop
            first = second; // Sets the first number to the second number (Basically moves the cursor if you look at it like an array, I know what I mean)
            second = next; // Set the second cursor to the next number which is calculated above
        }
    }
    
numbers(20)
}