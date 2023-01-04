import './styles/styles.css';

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const textContainer = document.querySelector('span');

let data = 0;

function add() {
  const value = Math.floor(Math.random() * 1000);
  data = Math.max(data, value);
  return value;
}

function sub() {
  const value = Math.floor(Math.random() * 1000);
  data = Math.min(data, value);
  return value;
}

function displayValue(now, text = data) {
  textContainer.innerHTML = `${text} (${now})`;
}

plusBtn.addEventListener('click', () => {
  displayValue(add());
});

minusBtn.addEventListener('click', () => {
  displayValue(sub());
});
