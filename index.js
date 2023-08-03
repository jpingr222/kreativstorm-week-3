const validSelections = ['rock', 'paper', 'scissors'];

const computerPlay = () => {
  return validSelections[Math.floor(Math.random() * validSelections.length)];
}

const playerIsWinner = (playerSelection, computerSelection) => {
  return (
    validSelections.indexOf(playerSelection) - validSelections.indexOf(computerSelection) === 1 ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  );
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === null) {
    return 'Invalid selection! Please select again';
  }

  const lowerCasePlayerSelection = playerSelection.toLowerCase();

  if (!validSelections.includes(lowerCasePlayerSelection)) {
    return 'Invalid selection! Please select again';
  }

  if (lowerCasePlayerSelection === computerSelection) {
    return `It's a tie! You both picked ${computerSelection}`;
  } else if (playerIsWinner(lowerCasePlayerSelection, computerSelection)) {
    return `You Win! ${lowerCasePlayerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${lowerCasePlayerSelection}`;
  }
}

const game = () => {
  console.log('Welcome to Rock Paper Scissors!');

  const gameRoundStatus = [];
  while (gameRoundStatus.length < 5) {
    const playerSelection = prompt('Open your console.log to play- Please enter your selection (rock, paper, or scissors)');
    const computerSelection = computerPlay();

    const gameResult = playRound(playerSelection, computerSelection);

    console.log('==========');
    console.log(`Round ${gameRoundStatus.length + 1}:`);
    console.log(gameResult);

    if (gameResult.includes('Win')) {
      gameRoundStatus.push(1);
    } else if (gameResult.includes('Lose')) {
      gameRoundStatus.push(-1);
    } else if (gameResult.includes('tie')) {
      gameRoundStatus.push(0);
    }
  }

  const winRoundCount = gameRoundStatus.filter(result => result === 1).length;
  const loseRoundCount = gameRoundStatus.filter(result => result === -1).length;
  const tieRoundCount = gameRoundStatus.filter(result => result === 0).length;

  console.log('==========');
  console.log('Game Over');
  console.log(`You won ${winRoundCount} round${winRoundCount > 1 ? 's' : ''}`);
  console.log(`You lost ${loseRoundCount} round${loseRoundCount > 1 ? 's' : ''}`);
  console.log(`You tied ${tieRoundCount} round${tieRoundCount > 1 ? 's' : ''}`);
}

game();
