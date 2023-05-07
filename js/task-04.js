let counterValue = 0;
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const counterValueEl = document.querySelector('#value');

const incrementClick = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};
const decrementClick = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', incrementClick);
decrementBtnEl.addEventListener('click', decrementClick);