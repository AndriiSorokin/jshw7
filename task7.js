const slider = document.querySelector('#font-size-control');

slider.addEventListener('input', () => {
  const text = document.querySelector('#text')
  text.style.fontSize = slider.value + "px";
});