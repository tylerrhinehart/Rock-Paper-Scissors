// function convertChoice(playerChoice) {
//     var pChoice = ''

//     if (playerChoice == 'rock') {
//         var pChoice = 1;
//     } else if (playerChoice == 'paper') {
//         var pChoice = 2;
//     } else {
//         var pChoice = 3;
//     }
//     return pChoice;
// }

function play(playerChoice) {
    var compChoice = computerChoice(); //change to compChoice function

    if (playerChoice == compChoice) {
        document.getElementById('result').innerHTML = 'Tie';
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        document.getElementById('result').innerHTML = 'Computer Wins. ' + 'Computer Chose: ' + compChoice;
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        document.getElementById('result').innerHTML = 'You Win';
        alert('Congratulations!');
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        document.getElementById('result').innerHTML = 'You Win';
        alert('Congratulations!');
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        document.getElementById('result').innerHTML = 'Computer Wins. ' + 'Computer Chose: ' + compChoice;
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        document.getElementById('result').innerHTML = 'Computer Wins. ' + 'Computer Chose: ' + compChoice;
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        document.getElementById('result').innerHTML = 'You Win';
        alert('Congratulations!');
    }
}

function computerChoice() {
    var comp = Math.random();
    if(comp <= 1 && comp >= 0.67) {
        return 'rock'
    } else if(comp <= 0.66 && comp >= 0.34) {
        return 'paper'
    } else {
        return 'scissors'
    }
}