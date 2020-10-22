const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.querySelector('body');

//get the random value in the hex array
const getRandomNum = () =>{
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', () => {
  let hexColor = '#';
  for(let i = 0; i <= 5; i++){
    hexColor += hex[getRandomNum()];
  }
  color.textContent = hexColor;
  body.style.backgroundColor = hexColor;
  

})

