const diceButton = document.querySelector('.dice-btn');
let totalP1 = document.querySelector('.total-p1');
let totalP2 = document.querySelector('.total-p2');

let player1Score = document.querySelector('.p1Score');
let player2Score = document.querySelector('.p2Score');


let player1 = 0;
let player2 = 0;

let player1Turn = true;


function randomDice() {
    return Math.floor(Math.random() * 5) + 1;
}

diceButton.addEventListener('click', function () {
    if (player1Turn === true) {
        let dice = randomDice();
        let scoreP1 = player1 += dice;
        player1Score.textContent = `${player1}`;
        totalP1.textContent = dice;
        player1Turn = false;
    } else {
        let dice = randomDice();
        let scoreP1 = player2 += dice;
        player2Score.textContent = `${player2}`;
        totalP2.textContent = dice;
        player1Turn = true;
    }
})