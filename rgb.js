const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.querySelector('body');


btn.addEventListener('click', () => {
//function to create random number
  const getRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  }
  //create the rgb structure
  const rgb = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`;
  
  //assign the rgb to the body backgroundColor
  body.style.backgroundColor = rgb;
  color.textContent = rgb;
})

