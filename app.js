/*Game Function
- Player ust guess a number between a min and a max
- Player get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Asign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
    console.log(guess)
 
 //   Validate
 // isNaN is a function in javascript
    if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //Check if won
    if(guess === winningNum){
        gameOver(true, `${winningNum} is correct`)
        // // disable input
        // guessInput.disabled = true;
        // //change border color
        // guessInput.style.borderColor = 'green'
        // //Set Message
        // setMessage(`${winningNum} is correct`, 'green');
    }else{
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            gameOver(false, `Game over you lost. The correct number was ${winningNum}`)
            //Game over - lost
        //     guessInput.disabled = true;
        // //change border color
        // guessInput.style.borderColor = 'red'
        // //Set Message
        // setMessage(`Game over you lost. The correct number was ${winningNum}`, 'red');
        }else{
            // Game continues - answer wrong

            //change border color
            guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value = '';

            //tell user it is the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)
        }
    }
})

//Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = "red";

  // disable input
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = color
  // set text color
  message.style.color = color
  //Set Message
  setMessage(msg);

  //play again
  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

//get random number
function getRandomNum(min, max){
console.log(Math.floor(Math.random()*(max-min+1)+min))
}

function setMessage(msg, color){
    message.style.color = color;
message.textContent = msg;
}