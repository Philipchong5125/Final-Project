const button  = document.getElementById('new-dice')
const newGame = document.getElementById('new-game')

const dice1 = document.getElementById('dice1-1')
const dice2 = document.getElementById('dice1-2')

const dice3 = document.getElementById('dice2-1')
const dice4 = document.getElementById('dice2-2')

const playerOneCurrentScore = document.getElementById('current-score1')
const playerOneTotalScore   = document.getElementById('total-score1')
const playerTwoCurrentScore = document.getElementById('current-score2')
const playerTwoTotalScore   = document.getElementById('total-score2')

const howToPlay  = document.getElementById('how-play')
const popUp1     = document.getElementById("pop-rules");
const closePopUp = document.getElementById('demo1')
const winPopup   = document.getElementById('win-popup')
const lostPopup  = document.getElementById('lost-popup')
const drawPopup  = document.getElementById('draw-popup')

popUp1.style.display = 'none'

howToPlay.addEventListener("click", function (){
    lostPopup.style.display  = 'none';
    winPopup.style.display   = 'none';
    drawPopup.style.display  = 'none';

    $("#pop-rules").css({opacity:'0'});
    $("#pop-rules").stop().animate({opacity:'1'},100);
    popUp1.style.display = 'block'

})
closePopUp.addEventListener("click", function (){
    $("#pop-rules").css({opacity:'1'});
    $("#pop-rules").stop().animate({opacity:'0'},100);
    popUp1.style.display = 'none'
})


//Initiate a new game
newGame.addEventListener("click", function(){
    location.reload();
})

button.addEventListener("click", rollDices);

let player1TotalScore = 0;
let player2TotalScore = 0;
let counter      = 0;

function rollDices(){

  let player1CurrentScore = "";
  let player2CurrentScore = "";

    one   = Math.round(Math.random()*5) + 1;
    two   = Math.round(Math.random()*5) + 1;
    three = Math.round(Math.random()*5) + 1;
    four  = Math.round(Math.random()*5) + 1;

    dice1.src = "../images/dice-" + one   + ".png";
    dice2.src = "../images/dice-" + two   + ".png";
    dice3.src = "../images/dice-" + three + ".png";
    dice4.src = "../images/dice-" + four  + ".png";

    if(one === 1)
    {
        player1CurrentScore = 0;
    }else if(two === 1)
    {
        player1CurrentScore = 0;
    }else{
        player1CurrentScore = one + two;
    }
    if(one === two)
    {
        player1CurrentScore = (one + two) * 2;
    }
    if(three === 1)
    {
        player2CurrentScore = 0;
        
    }else if(four === 1)
    {
        player2CurrentScore = 0;
    }else
    {
        player2CurrentScore = three + four;
    }
    if(three === four)
    {
        player2CurrentScore = (three + four) * 2;
    }

    player1TotalScore = player1TotalScore + player1CurrentScore;
    player2TotalScore = player2TotalScore + player2CurrentScore;
  
    playerOneCurrentScore.innerHTML = `${player1CurrentScore}`;
    playerOneTotalScore.innerHTML   = `${player1TotalScore}`;
    playerTwoCurrentScore.innerHTML = `${player2CurrentScore}`;
    playerTwoTotalScore.innerHTML   = `${player2TotalScore}`;
    
    counter++;
    
    if(counter >= 3){
        button.disabled = true;
      
      if(player1TotalScore > player2TotalScore){

        $("#win-popup").css({opacity:'0'});
        $("#win-popup").stop().animate({opacity:'1'},1000);
        newGame.classList.add('restBtn')
        button.classList.add('restRoll')
        winPopup.style.display = 'block';
        
        

      }else if(player2TotalScore > player1TotalScore){

        $("#lost-popup").css({opacity:'0'});
        $("#lost-popup").stop().animate({opacity:'1'},1000);
        newGame.classList.add('restBtn')
        button.classList.add('restRoll')
        lostPopup.style.display = 'block';  

      }else{

        $("#draw-popup").css({opacity:'0'});
        $("#draw-popup").stop().animate({opacity:'1'},1000);
        newGame.classList.add('restBtn')
        button.classList.add('restRoll')
        drawPopup.style.display = 'block';
      }
    }
}
