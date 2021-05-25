window.onload = function() {
    const grid = document.getElementById('grid');

    // Loop to create divs inside the main div representing the slots in the main thing
    for (var i = 0; i < 49; i++) {
        if (i >= 42) {
            const lastRow = document.createElement("div");
            lastRow.setAttribute("class", "taken");
            grid.appendChild(lastRow);
        } else {
            const square = document.createElement("div");
            square.setAttribute("class", "regular");
            grid.appendChild(square);
        }
    }
    const slots = document.querySelectorAll(".grid div");
    const winner = document.getElementById('winner');
    const currentPlayerDisplay = document.getElementById('currentPlayer');
    var gamePlayable = true;
    var currentPlayer = 1;

    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {
            alert("You have clicked number: " + i)
        };
    };

    for (let i = 0; i < slots.length; i++) {
        slots[i].onclick = () => {
            play(i);
        }
    }

    function play(i) {
        // Check if one of the players has won the game before allowing a move to be made
        if (gamePlayable) {
            var nextPlayer = 0;
            // Check to see if the slot you're trying to select already has a token in it
            if (slots[i].classList.contains("taken")) {
                alert("This slot is taken, please select another one.")
            } else {
                // Check if the slot right below the token is solid or "taken" to ensure that the player can't place a token mid-air
                if (slots[i + 7].classList.contains("taken")) {
                    // Adds the token to the selected spot and advances the turns
                    if (currentPlayer == 1) {
                        slots[i].classList.add("taken")
                        slots[i].classList.add("player-one");
                        nextPlayer = 2;
                        currentPlayerDisplay.innerHTML = currentPlayer;
                    } else {
                        slots[i].classList.add("taken")
                        slots[i].classList.add("player-two");
                        nextPlayer = 1;
                        currentPlayerDisplay.innerHTML = currentPlayer;
                    }
                } else {
                    alert("Gravity is a thing, please choose a slot which has a token below it.")
                }
            }
            // Check if there is a winner after each move, executing the algorithm only once
            checkWinner(i);
            currentPlayer = nextPlayer;
        } else {
            alert("Please reset the game before you continue playing.");
        }
    }

    function checkWinner(slotNo) {
        // Set the class to look for depending on the player's turn
        if (currentPlayer == 1) {
            classToLookFor = "regular taken player-one";
        } else {
            classToLookFor = "regular taken player-two";
        }

        // Check if there is a winner horizontally
        function checkHorizontally(slotNo) {
            // Cursors
            var playerTokenLeft = true;
            var playerTokenRight = true;
            var winCounter = 0;
            for (var i = 0; i < 5; i++) {
                // Checks to see if we can go to the left
                if (slots[slotNo - i] == null) {
                    playerTokenLeft = false;
                } else {
                    // Check if we can go to the right
                    if (slots[slotNo + i] == null) {
                        playerTokenRight = false;
                    }
                }
                // Check the token to the left of the cursor
                if (playerTokenLeft) {
                    if (slots[slotNo - i].className == classToLookFor) {
                        winCounter++;
                    } else {
                        playerTokenLeft = false;
                        i = 0;
                    }
                } else {
                    // Check the token to the right of the cursor
                    if (playerTokenRight) {
                        if (slots[slotNo + i].className == classToLookFor) {
                            winCounter++;
                        } else {
                            playerTokenRight = false;
                            i = 0;
                        }
                    }
                }
            }
            // Check if there are enough tokens to win
            if (winCounter >= 4) {
                alert("Player " + currentPlayer + " won!");
                gamePlayable = false;
            }
        }

        function checkVertically(slotNo) {
            var playerTokenUp = true;
            var playerTokenDown = true;
            var winCounter = 0;
            var valueToMove = 0;
            for (var i = 0; i < 6; i++) {
                if (playerTokenUp) {
                    // Check above to see if a token is correct
                    if (slots[slotNo - valueToMove].className == classToLookFor) {
                        winCounter++;
                        // Check if there are any valid spots above the cursor
                        if (slotNo - valueToMove >= 7) {
                            valueToMove += 7;
                        } else {
                            playerTokenUp = false;
                        }
                    } else {
                        playerTokenUp = false;
                        // Reset the cursor so we can check below without skipping
                        i = 0;
                        valueToMove = 7;
                    }
                } else {
                    // Check below to see if token is correct
                    if (playerTokenDown) {
                        if (slots[slotNo + valueToMove].className == classToLookFor) {
                            winCounter++;
                            // Check if there are any valid spots below the cursor
                            if (slotNo + valueToMove <= 35) {
                                valueToMove += 7;
                            } else {
                                playerTokenDown = false;
                            }
                        } else {
                            playerTokenDown = false;
                            // Reset the cursor so we can check above without skipping
                            i = 0;
                            valueToMove = 7;
                        }
                    }
                }
            }
            // Check if there are enough tokens to win
            if (winCounter >= 4) {
                alert("Player " + currentPlayer + " won!");
                gamePlayable = false;
            }
        }

        function checkDiagonally(slotNo) {

        }

        checkHorizontally(slotNo);
        checkVertically(slotNo);
        checkDiagonally(slotNo);
    }
}