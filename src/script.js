'use strict';

//select elements
const btn = document.querySelectorAll('.btn--grey');
const btnEqual = document.querySelector('.btn--equal');
const btnClear = document.querySelector('.btn--clear');
const btnDel = document.querySelector('.btn--del');
const screen = document.querySelector('.screen');

// console.log(btnEqual.textContent);
//global values
let ans, answer;

btn.forEach((button) => {
 button.addEventListener('click', function (e) {
  e.preventDefault();
  const value = e.target.dataset.num;
  screen.value += value;

  ans = screen.value;
 })
});


function clearScreen() {
 screen.value = '';
 ans = '';
 answer = '';
}



btnClear.addEventListener('click', clearScreen)


btnDel.addEventListener('click', function (e) {
 //remove a number from a string
 if (!ans) clearScreen();
   const remStr = ans.slice(0, -1);
   screen.value = remStr;
   ans = remStr;
  
  });
 
 
 
btnEqual.addEventListener('click', function (e) {
 if (!ans === "") return;
  answer = eval(ans);
 screen.value = answer;
 ans = '';
})

