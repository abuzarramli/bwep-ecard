//colour change code
let colors = ['#FFDFDD','#957DAD','#FEC8D8','#B1D4EC','#F9F0C2','#D2F8DF'];
//get button
let button = document.getElementById('button');
//addEventListener
button.addEventListener('click', function(){
  //randomizer
  var randomColor = colors[Math.floor(Math.random() * colors.length)]
  //get container
  let container = document.getElementById('card');

  container.style.background = randomColor;
})
// colour change code

//local storage
const storageInput = document.querySelector('#store');
const name = document.querySelector('#name');
const button = document.querySelector('#save');

storageInput.addEventListener
