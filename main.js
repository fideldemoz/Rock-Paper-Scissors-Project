const button = document.querySelectorAll('button');
const rock = button[0];
const paper = button[1];
const scissors = button[2];

const results = document.querySelector('.results');
const paragraphs = document.querySelectorAll('p');
const msg = paragraphs[0];
const playerBoard = paragraphs[1];
const computerBoard = paragraphs[2];

const options = ['rock', 'scissors', 'paper'];

let computerScore = parseInt(0);
let playerScore = parseInt(0);

function singlePlay(player, computer) {
	let _1, _2, _3;
	_1 = options[0];
	_2 = options[1];
	_3 = options[2];


	if (player == computer) {
		msg.textContent = `Tie. ${player} is same as ${computer}`;
		showBoard()
		checkGame()
	} else if (
	(computer == _3 && player == _1) 
	|| (computer == _1 && player == _2) 
	|| (computer == _2 && player == _3)) { //		if computer wins: keep record +1 to computer
		computerScore += 1;
		msg.textContent = `You lost. ${computer} beats ${player}.`;
		showBoard()
		checkGame()
	} else if ((computer == _1 && player == _3) 
	|| (player == _1 && computer == _2)
	|| (player == _2 && computer == _3)){ //		if player wins: keep record +1 to player
		playerScore += 1;
		msg.textContent = `You won. ${player} beats ${computer}.`;
		showBoard()
		checkGame()
	} 
}

function showBoard() {
	playerBoard.textContent = `You - ${playerScore}`;
	computerBoard.textContent =  `Computer - ${computerScore}`;
}

function checkGame() {
	if (computerScore === 5) {
		msg.textContent = `Game over. You lost!`;
		showBoard()
		playerScore = 0;
		computerScore = 0;
} else if (playerScore === 5) {
		msg.textContent = `Game over. You won!`;
		showBoard()
		playerScore = 0;
		computerScore = 0;
	}
}

function getComputerSelection() {
			return options[Math.floor(Math.random()*options.length)];
}
let computerSelection;
let playerSelection;

rock.addEventListener('click', () => {
			playerSelection = options[0];
			computerSelection = getComputerSelection();
			singlePlay(playerSelection, computerSelection);
		});
		
paper.addEventListener('click', () => {
			playerSelection = options[1];
			computerSelection = getComputerSelection();
			singlePlay(playerSelection, computerSelection);
		});
		
scissors.addEventListener('click', () => {
			playerSelection = options[2];
			computerSelection = getComputerSelection();
			singlePlay(playerSelection, computerSelection);
		});

