// DOM Events Exercise
// 1a
console.log(`1 * const button 1 *`);
const button1 = document.getElementById(`one`);
// or
// const button1 = document.querySelector(`#one`);
// or
// const button1 = document.querySelector(`button`);
console.log(button1);
console.dir(button1);
console.log(`=`.repeat(25));


// 1b
console.log(`1b * button1.onclick *`);
button1.onclick = function (){
    alert(`You clicked the first button! Congrats!`);
  };
console.log(button1);
console.dir(button1);
console.log(`=`.repeat(25));

// 2a
console.log(`2a * set h3 to const variable *`);
const h3 = document.querySelector(`h3`);
console.log(h3);
console.dir(h3);
console.log(`=`.repeat(25));

// 2b
console.log(`2b * Using addEventListener, have an alert *`);
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
  },{once: true}); // makes the alert stop after the first time

console.log(h3);
console.dir(h3);
console.log(`=`.repeat(25));

// 3a
console.log(`3a * Select the form element/tag and set it to a const variable called form *`);
const form = document.querySelector(`form`);
console.log(form);
console.dir(form);
console.log(`=`.repeat(25));

// 3b
console.log(`3b * Using addEventListener, display the value in the text input with an alert when the submit input in the form is clicked *`);
form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});
    
// console.log(entry);
// When console.log(entry) is not commented out, get error in ChromeDev Tools: "Uncaught ReferenceError: entry is not defined at app.js:54:13"

// console.dir(entry);
// When console.dir(entry) is not commented out, get error in ChromeDev Tools: "Uncaught ReferenceError: entry is not defined at app.js:57:13"
console.log(`=`.repeat(25));

// Bonus
// 4a 
console.log(`4a * Select the Dark Mode button and set it to a const variable called darkMode *`);
const darkMode = document.getElementById(`dm`);
console.log(darkMode);
console.dir(darkMode);
console.log(`=`.repeat(25));

// 4b 
console.log(`4b * Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode Button is clicked *`);
/*
const body = document.querySelector(`body`)
darkMode.addEventListener(`click`, ()j => {
    body.classList.toggle(`dark-mode`);
  });
*/
  // or

  const everyElement = document.querySelectorAll(`*`);
  darkMode.addEventListener(`click`, () => {
      for (element of everyElement){
          element.classList.toggle(`dark-mode`);
      }
  });
console.log(darkMode);
console.dir(darkMode);
console.log(`=`.repeat(25));

// 5a 
console.log(`5a * Select the "CAN ONLY CLICK A CERTAIN NUMBER OF TIMES" button and set it to a const variable called times *`);
const times = document.getElementById(`times`);
console.dir(times);
console.log(times);
console.log(`=`.repeat(25));

// 5b 
console.log(`5b * Using addEventListener, have an alert that says "You clicked the last button! Congrats!" *`);
/*
let x = 0;
times.addEventListener(`click`, () => {
    x++;
    if (x <= 2){
        alert(`You clicked the last button! Congrats!`)
    } else if (x === 3){
        alert(`OH NO! This button is NOT going to work anymore`);
    }else {
        times.disabled = true;
    }
     
});
*/

// or
/*
let click = 0;
times.onclick = () => {
    click++;
    if (click <= 2){
        alert(`You clicked the last button! Congrats!`)
    } else if (click === 3){
        alert(`OH NO! This button is NOT going to work anymore`);
    } else {
        times.disabled = true;
    }
}
*/

// or

let num = 1;
times.addEventListener(`click`, () => {
    if (num < 3){
        alert (`You clicked the last button! Congrats!`);
        num++;
    } else if (num === 3){
        alert(`OH NO! This button is NOT going to work anymore`)
        num++;
    } else {
        times.disabled = true;
    }
});
console.dir(times);
console.log(times);
console.log(`=`.repeat(25));




