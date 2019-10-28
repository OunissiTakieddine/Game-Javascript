
let userScore = 0;
let computreScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissoer';
}

function win(userchoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userWin = document.getElementById(userchoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computreScore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} You Win!!!`;
    userWin.classList.add('win');
    setTimeout(() => userWin.classList.remove('win'), 1000);
}
function lose(userchoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userWin = document.getElementById(userchoice);
    computreScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computreScore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} Lose to ${convertToWord(computerChoice)}${smallCompWord} You Lost!!!`;
    userWin.classList.add('lose');
    setTimeout(() => userWin.classList.remove('lose'), 1000);
}
function draw(userchoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'Comp'.fontsize(3).sub();
    const userWin = document.getElementById(userchoice);
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallCompWord} Its draw!!!`;
    userWin.classList.add('draw');
    setTimeout(() => userWin.classList.remove('draw'), 1000);
}

function game(userchoice) {
    const computerChoice = getComputerChoice();
    switch (userchoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userchoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userchoice, computerChoice);
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userchoice, computerChoice);
            break;
    }

}

function main() {

    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissor_div.addEventListener('click', () => game('s'));
}
main();