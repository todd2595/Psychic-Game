var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersGuessed = [];
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
var directionsText = document.getElementById("directions-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userGuess = '';

resetGame();
display();

document.onkeyup = function(event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    
    if (userGuess === computerGuess) {
        win();
    }
    else if (guessesRemaining - 1 === 0) {
        lost ();
    }
    else {
        fail();
    }
    display();
}
    function display(){
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        lettersGuessedText.textContent = "Letters used: " + userGuess;
        guessesRemainingText.textContent = "You have : " + guessesRemaining + " guesses left";    
        lettersGuessed.textContent = wrongLetter.join(',');
        //var lettersGuessed = document.getElementById("lettersGuessed-text") = userGuess;
    }


    function win() {
        wins++;
        resetGame();
    }

    function lost(){
        losses++;
        resetGame();
    }

    function fail(letter){
        guessesRemaining--;
        wrongLetter.push(letter);
    }
    function resetGame(){
        guessesRemaining = 9;
        wrongLetter = [];
    }

