const validSelections = ['rock', 'paper', 'scissors'];

const computerPlay = () => validSelections[Math.floor(Math.random() * validSelections.length)];

const playerIsWinner = (playerSelection, computerSelection) => {
    return (
        validSelections.indexOf(playerSelection) - validSelections.indexOf(computerSelection) === 1 ||
        (playerSelection === 'rock' && computerSelection === 'scissors')
    );
}

const addFunnyMessage = (win) => {
    const funnyWinInfo =
    [
        'Amazing, You were born to win!',
        'Wow, you\'re a rockstar!',
        'You\'re the ultimate champion!',
        'You\'re unstoppable',
        'You are on fire!'
    ];

    const funnyloseInfo =
    [
        'Losing is essential to anyone’s success.',
        'You are a fighter, never give up!',
        'You almost got it! Keep it up!',
        'You\'ve got skills, keep practicing!',
        'Dont worry, better luck soon!'
    ];

    const displayMessage = win ? funnyWinInfo : funnyloseInfo;
    const randomMessage = displayMessage[Math.floor(Math.random()*displayMessage.length)];
    return randomMessage;
}

const endGameDialogue =(winRoundCount) => {
    if (winRoundCount == 5) {
      alert('WHAT?!?!?! ARE YOU EVEN A HUMAN?? GO DO A CAPTCHA RIGHT NOW YOU MASKED AI!');
    } else if (winRoundCount >=1) {
      alert('It was a fine bout! As expected of my adversary! We shall see each other again in the future!');
    } else {
      alert('BWAHAHAHAHHAHA!!! WERE YOU EVEN TRYING??? IF EVERY HUMAN IS LIKE YOU WORLD DOMINATION WILL BE SOOOOOO EASYYYYY!');
    }
    }

const playRound = (playerSelection, computerSelection) => {
    let lowerCasePlayerSelection = (
    playerSelection === null
    ? null
    : playerSelection.toLowerCase().trim());

    if (!validSelections.includes(lowerCasePlayerSelection)) {
        return 'Invalid selection! \u26A0 Please select again';
    } else if (playerSelection === null) {
        playerSelection = '';
        continue;
    }else {
        let userAndCompSelection = {
            playerSelection: lowerCasePlayerSelection[0]
                .toUpperCase()
                .concat(lowerCasePlayerSelection.slice(1)),
            computerSelection: computerSelection[0]
                .toUpperCase()
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
    let gameRoundStatus = [];
    while (gameRoundStatus.length < 5) {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Please enter your selection (rock, paper, or scissors)');
        let gameResult = playRound(playerSelection, computerSelection);
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
    let winRoundCount = gameRoundStatus.filter(result => result === 1).length;
    let loseRoundCount = gameRoundStatus.filter(result => result === -1).length;
    let tieRoundCount = gameRoundStatus.filter(result => result === 0).length;
    console.log('==========');
    console.log('Game Over');
    console.log(`You won ${winRoundCount} round${winRoundCount > 1 ? 's' : ''}`);
    console.log(`You lost ${loseRoundCount} round${loseRoundCount > 1 ? 's' : ''}`);
    console.log(`You tied ${tieRoundCount} round${tieRoundCount > 1 ? 's' : ''}`);
    endGameDialogue(winRoundCount);
}

alert('Welcome to my lair Human, I see you have accepted my challenge of the ultimate rock paper scissor showdown. Your first test?\nOpen the console if you feel ready to face me, MWHAAHAHAHAHA!!!');
setTimeout(() => console.log('Hey you!'), 2000);
setTimeout(() => console.log('You are finally awake...'), 4000);
setTimeout(() => console.log('Are we going to go at it or what????'), 6000);
setTimeout(() => console.log('Oh... You probably don\'t know how to start the game.'), 8000);
setTimeout(() => console.log('I have set up a timer to start the game soon, there is no escape until you finish the game!'), 10000);
setTimeout(() => console.log('MWHAAHAHAHAHA!!!!'), 12000);
setTimeout(() => console.log('The game starts in..'), 14000);
setTimeout(() => console.log('3..'), 15000);
setTimeout(() => console.log('2..'), 16000);
setTimeout(() => console.log('1..'), 17000);
setTimeout(() => game(), 18000);
