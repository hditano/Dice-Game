const diceButton = document.querySelector('.dice-btn');
let totalP1 = document.querySelector('.total-p1');
let totalP2 = document.querySelector('.total-p2');


let player1 = 0;
let player2 = 0;

let player1Turn = true;

function randomDice() {
    return Math.floor(Math.random() * 5 ) + 1;
}

diceButton.addEventListener('click', function() {
    if(player1Turn === true) {
        totalP1.textContent = randomDice();
        player1Turn = false;
    } else {
        totalP2.textContent = randomDice();
        player1Turn = true;
    }
})