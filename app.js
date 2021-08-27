//initialize the user and computer score to 0 
let userScore=0; 
let computerScore = 0; 

//cache the DOM to have easier access by storing html elements into a variable name.
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");

//This function is to randomize the array of three choices: rock, paper, scissors. 
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// This function is to convert the choices letter rps to readable words - rock, paper, scissors.
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

// user choice input
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win! 🔥`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...💩`; 
    userChoice_div.classList.add('red-glow');
    setTimeout(()=> userChoice_div.classList.remove('red-glow') , 300);
}


function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`; 
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=> userChoice_div.classList.remove('gray-glow') , 300);
}

// This function is to set game choice logic and list out the possibilities of choices and game result. 
function game (userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

// This function is to add click interactivity to the rock, paper, scissors buttons.
function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();