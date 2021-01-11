const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]')
const count = document.querySelector('#value')

let counterValue = 0
const incrementCount = () => (count.textContent = counterValue++);
const decrementCount = () => (count.textContent = counterValue--);

increment.addEventListener('click', incrementCount)
decrement.addEventListener('click',decrementCount)