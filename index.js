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

const addFunnyMessage = (win) => {
    const funnyWinInfo = 
    ["Amazing, You were born to win!",
    "Wow, you're a rockstar!",
    "You're the ultimate champion!",
    "You're unstoppable",
    "You are on fire!"
    ]

const funnyloseInfo = 
    [
    "Losing is essential to anyone’s success.",
    "You are a fighter, never give up!",
    "You almost got it! Keep it up!",
    "You've got skills, keep practicing!",
    "Dont worry, better luck soon!"
    ]
const displayMessage = win? funnyWinInfo: funnyloseInfo
    const randomMessage = displayMessage[Math.floor(Math.random()*displayMessage.length)]
    return randomMessage
}

const playRound = (playerSelection, computerSelection) => {
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    if (playerSelection === null || !validSelections.includes(lowerCasePlayerSelection)) {
        return 'Invalid selection! \u26A0 Please select again';
    }else{
        const userAndCompSelection = {
            playerSelection: lowerCasePlayerSelection[0].toUpperCase()
            .concat(lowerCasePlayerSelection.slice(1)),
            computerSelection: computerSelection[0].toUpperCase()
            .concat(computerSelection.slice(1))
            };
        if (lowerCasePlayerSelection === computerSelection) {
            return `It's a tie! \uD83E\uDD14 You both picked ${userAndCompSelection['computerSelection']}`;
        } else if (playerIsWinner(lowerCasePlayerSelection, computerSelection)) {
            return `You Win! ${addFunnyMessage(true)} \uD83C\uDF89 ${userAndCompSelection['playerSelection']} beats ${userAndCompSelection['computerSelection']}`;
        } else {
            return `You Lose! ${addFunnyMessage(false)} \uD83D\uDE1E ${userAndCompSelection['computerSelection']} beats ${userAndCompSelection['playerSelection']}`;
        }
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