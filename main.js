// Rock Scissors paper
// Created by Fidel
// Game rule: rock beats scissors, scissors beat paper, paper beats rock
//-------------------------------------------------------------------------
function game() {
	let i = parseInt(0);
	let options = ['rock', 'scissors', 'paper'];
	let keepOn;
	let cScore = parseInt(0);
	let pScore = parseInt(0);

	
	
	do {
		i++;
		
		//------------------var player----------------------------
		// PROMPT for players choice (1, 2, 3 )
		let player = prompt('Enter a choice \n 1 = rock .... 2 = scissors .... 3 = paper');
		if (player == 1) { // each number corresponds to a choice
			player = 'rock';
			keepOn = true;
		} else if (player == 2) {
			player = 'scissors';
			keepOn = true;
		} else if (player == 3) {
			player = 'paper';
			keepOn = true;
		} else {
			if (player = null || (player != 'rock' || player != 'scissors' || player != 'paper')) {
				console.log(`Please, enter a valid choice.`);
				keepOn = false;
			} // if players choice is not in range, cancel.
		}
		// ----------------end player----------------------
		
		// ----------------- var computer ----------------------
		// GENERATE a computer choice
		function getComputerChoice() {
			return options[Math.floor(Math.random()*options.length)];
		}
		computer = getComputerChoice();
		//-------------- end computer -------------------------
		
		//-----------------the game--------------------------
		function singlePlay(player, computer) {
			let _1, _2, _3;
			_1 = options[0];
			_2 = options[1];
			_3 = options[2];

			// the core game
			if (player == computer) { //		if computer and user have same choice: Tie. Do not keep record
				return `Tie. ${player} is same as ${computer}`;
			} else if (
			(computer == _3 && player == _1) 
			|| (computer == _1 && player == _2) 
			|| (computer == _2 && player == _3)) { //		if computer wins: keep record +1 to computer
				cScore += 1;
				return `You lost. ${computer} beats ${player}.
				Computer ${cScore} - You ${pScore}`
			} else if ((computer == _1 && player == _3) 
			|| (player == _1 && computer == _2)
			|| (player == _2 && computer == _3)){ //		if player wins: keep record +1 to player
				pScore += 1;
				return `You won. ${player} beats ${computer}. 
				Computer ${cScore} - You ${pScore}`
			}
		}
		
		console.log(`Player: ${player}`);
		console.log(`Computer: ${computer}`);
		
		if (keepOn==true) {
		console.log(singlePlay(player, computer));
	}
	} while (i<5);
	
	console.log(`Total
Computer: ${cScore} - ${pScore} : You`);
	
}