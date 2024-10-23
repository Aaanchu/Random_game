let randomNo = parseInt(Math.random()*100+1);
const submit=document.querySelector('#submits');
const userInput=document.querySelector('#guessfield');
const guessArray=document.querySelector('.guesses');
const lastRemainig=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)||guess<1||guess>100){
        alert('please give valid number');
    }else{
        prevGuess.push(guess);
        if(numGuess==10){
            displayGuess(guess);
            displayMessage(`Game Over . Random Number was ${randomNo}`)
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNo){
        displayMessage(`You won !`);
        endGame();
    }
    else if(Math.abs(guess-randomNo)>5 && guess>randomNo){
       displayMessage(`Your guess is TOOO High`);
    }
    else if(Math.abs(guess-randomNo)>5 && guess<randomNo){
        displayMessage(`Your guess is TOOO Low `)
    }
    else if(guess>randomNo){
        displayMessage(`You are near but High`)
    }
    else if(guess<randomNo){
        displayMessage(`You are near but Low`)
    }
}
function displayGuess(guess){
    userInput.value='';
    guessArray.innerHTML +=`   ${guess}`
    numGuess++;
    lastRemainig.innerHTML=`${10-numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>` ;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const startAgain= document.querySelector('#newGame');
    startAgain.addEventListener('click',function(e){
        randomNo=parseInt(Math.random()*100 +1);
        prevGuess=[];
        numGuess=1;
        guessArray.innerHTML='';
        lastRemainig.innerHTML='10';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
} 