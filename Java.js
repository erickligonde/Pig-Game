let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
let roll = document.querySelector('.btn--roll')
let hold = document.querySelector('.btn--hold')
let score0 = document.querySelector('#score--0')
let score1 = document.querySelector('#score--1')
let diceEl = document.querySelector('.dice')
let restart = document.querySelector('.btn--new')

diceEl.classList.add('hidden')

let scores = [0, 0]
let currentScore = 0
let activePlayer = 0
roll.addEventListener('click', function() {
let ranNum = Math.floor(Math.random() * 6) + 1


diceEl.classList.remove('hidden')
diceEl.src = `dice-${ranNum}.png` 

if (ranNum !== 1){
currentScore += ranNum
document.getElementById(`current--${activePlayer}`).textContent = currentScore

} else{
  document.getElementById(`current--${activePlayer}`).textContent = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  currentScore = 0
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}

})

hold.addEventListener('click', function() {
  scores[activePlayer] += currentScore
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
})

restart.addEventListener('click', function(){
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  diceEl.classList.add('hidden')

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;  

  if (!player0.classList.contains('player--active')) {

    player0.classList.add('player--active');
  }
  player1.classList.remove('player--active');
})