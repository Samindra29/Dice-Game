let player1score = 0;
let player2score = 0;
let player1turn = true;

const message = document.getElementById("message");

const player1scoreBoard = document.getElementById("player1scoreBoard");
const player2scoreBoard = document.getElementById("player2scoreBoard");

const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");

const rollBtn = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");

function toggleBtn(){
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
function reset(){
    player1score = 0
    player2score = 0
    player1scoreBoard.textContent = player1score
    player2scoreBoard.textContent = player2score
    message.textContent = "Player 1's Turn👇🏻"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
    player1turn = true
}

rollBtn.addEventListener("click", function(){
    const randomNum = Math.floor(Math.random() * 6 + 1);
    
    if(player1turn){
        player1Dice.textContent = randomNum
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")

        message.textContent = "Player 2 Turn👇🏻"

        player1score += randomNum
        player1scoreBoard.textContent = player1score
        if(player1score >= 20){
            message.textContent = "Player 1 WINS! 🥳"
            toggleBtn()
        }

    }
    else{
        player2Dice.textContent = randomNum
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")

        message.textContent = "Player 1's Turn👇🏻"

        player2score += randomNum
        player2scoreBoard.textContent = player2score
        if(player2score >= 20){
            message.textContent = "Player 2 WINS! 🥳"
            toggleBtn()
        }

    }
    player1turn = !player1turn

    resetBtn.addEventListener("click", function(){
        reset()
    })
    
})