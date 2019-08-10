const button = document.querySelector('.parta');
const pop = document.querySelector('.popup-close');
const popup = document.querySelector('.popup-wrapper');
const pop2 = document.querySelector('.popup-close2');
const popup2 = document.querySelector('.popup-wrapper2');
const butto = document.querySelector('.partb');
button.addEventListener('click', () =>{
  popup.style.display = 'block';
});
pop.addEventListener('click', () =>{
  popup.style.display = 'none';
});
popup.addEventListener('click', () =>{
  popup.style.display = 'none';
});

butto.addEventListener('click', () =>{
  popup2.style.display = 'block';
});
pop2.addEventListener('click', () =>{
  popup2.style.display = 'none';
});
popup2.addEventListener('click', () =>{
  popup2.style.display = 'none';
});
