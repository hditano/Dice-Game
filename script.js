const diceButton = document.querySelector('.dice-btn');
const resetButton = document.querySelector('.reset-btn');
const h1 = document.querySelector('h1');
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

function showResetButton() {
    diceButton.style.display = 'none';
    resetButton.style.display = 'block';
}

resetButton.addEventListener('click', function() {
    resetGame();
    resetButton.style.display = 'none';
    diceButton.style.display = 'block';
})

diceButton.addEventListener('click', function () {
    if (player1Turn === true) {
        h1.textContent = 'Player 1 Turn!!!';
        totalP2.classList.remove('total-shadow');
        totalP1.classList.add('total-shadow');
        let dice = randomDice();
        player1 += dice;
        player1Score.textContent = `${player1}`;
        totalP1.textContent = dice;
        player1Turn = false;
    } else {
        h1.textContent = 'Player 2 Turn!!!';
        totalP1.classList.remove('total-shadow');
        totalP2.classList.add('total-shadow');
        let dice = randomDice();
        player2 += dice;
        player2Score.textContent = `${player2}`;
        totalP2.textContent = dice;
        player1Turn = true;
    }

    if(player1 >= 20) {
        h1.textContent = 'Player 1 Won!!!';
        showResetButton();
    } else if(player2 >= 20){
        h1.textContent = 'Player 2 Won!!!';
        showResetButton();
    }
})


function resetGame() {
    player1 = 0;
    player2 = 0;
    totalP1.textContent = '-';
    totalP2.textContent = '-';
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    player1Turn = true;
    h1.textContent = 'Player 1 Turn';
    diceButton.textContent = 'Roll Dice';
}