/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;


init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    // Random Number for dice
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display the random number with dice picture
    var diceDom = document.querySelector('.dice');
    diceDom.src = './dice-' + dice + '.png';
    diceDom.style.display = 'block';
    document.querySelector('#current-' + activePlayer).innerHTML = dice;

    // Current score will be 0 if dice rolled to 1
    if (dice !== 1) {
        // add the score to current score
        roundScore += dice;
        document.getElementById(
            'current-' + activePlayer
        ).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

// Hold button
console.log(activePlayer);

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to global score

    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent =
        scores[activePlayer];
    // nextPlayer();

    // if player own the game
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document
            .querySelector('.player-' + activePlayer + '-panel')
            .classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    // Proceed to nex player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';

    // making all scores 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

}

// var scores, roundScore, activePlayer;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

// //making everything default

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';
// document.querySelector('.dice').style.display = 'none';

// // Roll Dice Button

// document.querySelector('.btn-roll').addEventListener('click', function() {
//     // Generate a random number
//     var dice = Math.floor(Math.random() * 6) + 1;

//     //Display the random number with dice picture
//     document.getElementById('current-' + activePlayer).textContent = dice;

//     var diceDom = document.querySelector('.dice');
//     diceDom.src = 'dice-' + dice + '.png';
//     document.querySelector('.dice').style.display = 'block';

//     // If dice rolled to 1, current score will be 0;
//     if (dice !==1) {
//         // if dice is not 1, then add the score
//         roundScore += dice;
//         document.getElementById('current-' + activePlayer).textContent = roundScore;
//     } else {
//         // make current score 0 and change player
//         document.querySelector('.dice').style.display = 'none';
//         activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
//         roundScore = 0;
//         document.getElementById('current-0').textContent = '0';
//         document.getElementById('current-1').textContent = '0';

//         document.querySelector('.player-0-panel').classList.toggle('active');
//         document.querySelector('.player-1-panel').classList.toggle('active');
//     }
// })

// // Hold Button for holding score for player before getting 0;

// document.querySelector('.btn-hold').addEventListener('click', function() {
//     // Current Score to the global score

// })
