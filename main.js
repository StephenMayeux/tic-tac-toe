var turn = "X";
var player = "";
var spaces = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0
};

// event handler variables
var winner = document.getElementById('winner');
var whoWins = document.getElementById('who-wins');
var box = document.getElementsByClassName('square');
var restart = document.getElementsByClassName('restart');
var startmodal = document.getElementById('start');
var bgmodal = document.getElementById('modal-bg');
var closemodal = document.getElementsByClassName('close');
var X = document.getElementById('X');
var O = document.getElementById('O');


// box event handlers
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {

        if (turn === "X") {
            if (spaces[this.id] === 0) {
                this.innerHTML = "O";
                spaces[this.id] = "O";
                turn = "O";
                checkWin();
                console.log(turn);
                console.log(spaces);
            }
            else {
                console.log('space taken');
            }
        }

        else {
            if (spaces[this.id] === 0) {
                this.innerHTML = "X";
                spaces[this.id] = "X";
                turn = "X";
                checkWin();
                console.log(turn);
                console.log(spaces);
            }
            else {
                console.log('space taken');
            }
        }
    });
}

// restart button event listener
for (var i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', function () {
        for (var i = 0; i < box.length; i++) {
            box[i].innerHTML = "";
            spaces[i + 1] = 0;
        }

        winner.className = "hidden";
        startmodal.classList.remove("hidden");
        bgmodal.classList.remove("hidden");
    });

}

X.addEventListener('click', function () {
    //set turn to the opposite so when you click it is your turn
    player = 'X';
    turn = 'O';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";

});

O.addEventListener('click', function () {
    //set turn to the opposite so when you click it is your turn
    player = 'O';
    turn = 'X';
    startmodal.className = "hidden";
    bgmodal.className = "hidden";
});

for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', function () {

        startmodal.className = "hidden";
        winner.className = "hidden";
        bgmodal.className = "hidden";
    });
}


function checkWin() {

    // check if three in a row for 'O'
    if ((spaces["1"] === "O" && spaces["2"] === "O" && spaces["3"] === "O") || (spaces["4"] === "O" && spaces["5"] === "O" && spaces["6"] === "O") || (spaces["7"] === "O" && spaces["8"] === "O" && spaces["9"] === "O") || (spaces["1"] === "O" && spaces["4"] === "O" && spaces["7"] === "O") || (spaces["2"] === "O" && spaces["5"] === "O" && spaces["8"] === "O") || (spaces["4"] === "O" && spaces["6"] === "O" && spaces["9"] === "O") || (spaces["1"] === "O" && spaces["5"] === "O" && spaces["9"] === "O") || (spaces["3"] === "O" && spaces["5"] === "O" && spaces["7"] === "O")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "'O' Wins!!";
        bgmodal.classList.remove("hidden");
        console.log("O WINS!!");
        return;
    }

    // check if three in a row for 'X'
    else if ((spaces["1"] === "X" && spaces["2"] === "X" && spaces["3"] === "X") || (spaces["4"] === "X" && spaces["5"] === "X" && spaces["6"] === "X") || (spaces["7"] === "X" && spaces["8"] === "X" && spaces["9"] === "X") || (spaces["1"] === "X" && spaces["4"] === "X" && spaces["7"] === "X") || (spaces["2"] === "X" && spaces["5"] === "X" && spaces["8"] === "X") || (spaces["4"] === "X" && spaces["6"] === "X" && spaces["9"] === "X") || (spaces["1"] === "X" && spaces["5"] === "X" && spaces["9"] === "X") || (spaces["3"] === "X" && spaces["5"] === "X" && spaces["7"] === "X")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "'X' Wins!!";
        bgmodal.classList.remove("hidden");
        console.log("X WINS!!");
        return;
    }

    // check for draw
    else if ((spaces["1"] === "X" || spaces["1"] === "O") && (spaces["2"] === "X" || spaces["2"] === "O") && (spaces["3"] === "X" || spaces["3"] === "O") && (spaces["4"] === "X" || spaces["4"] === "O") && (spaces["5"] === "X" || spaces["5"] === "O") && (spaces["6"] === "X" || spaces["6"] === "O") && (spaces["7"] === "X" || spaces["7"] === "O") && (spaces["8"] === "X" || spaces["8"] === "O") && (spaces["9"] === "X" || spaces["9"] === "O")) {

        winner.classList.remove("hidden");
        whoWins.innerHTML = "Draw!!";
        bgmodal.classList.remove("hidden");
        console.log("Draw");
    }
}