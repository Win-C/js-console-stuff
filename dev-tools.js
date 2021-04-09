"use strict";

const breakdown = document.getElementById('break-down');

const dogs = [
  { name: 'Snickers', age: 2 }, 
  { name: 'hugo', age: 8 },
];

/** Makes the p tag element green and increase size */
function makeGreen() {
  console.debug("makeGreen called");
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '&') // Can just use back ticks
let str = '&'
console.log(`Hello... ${str}`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background:red;');
// %c for what you want to style and the second argument you want to style

// warning!
console.warn('OH NOOO!'); // with stack trace

// Error :|
console.error('OH NOOO!'); // with stack trace

// Info
console.info('Fun fact');

// Testing
console.assert(1 === 1, 'That is wrong!');
// only console when something is wrong

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); // to see all the properties and methods that lives on the element

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Dog');
console.count('Dog');
console.count('Cat');
console.count('Dog');
console.count('Dog');
console.count('Cat');
console.count('Bunny');
console.count('Cat');
console.count('Cat');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/win-c')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

// table
console.table(dogs);

breakdown.addEventListener('click', makeGreen);
