'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

score0El.textContent =0;
score1El.textContent =0;
// diceEl.classList.add('hidden');
btnroll.addEventListener(',click', function(){
    //genrate the no.
    const dice = Math.trunc(Math.random()*6)+1
    //displat the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `.dice-${dice}.png`;
    //check for roller 1
})



