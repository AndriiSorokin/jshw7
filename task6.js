const input = document.querySelector("#validation-input")
console.dir(input);

input.addEventListener('blur', (e) => {
  const inputLength = e.target.value.length
  const dataLength = Number(input.dataset.length)
  console.log(inputLength);
  console.dir(dataLength);

  if (inputLength === dataLength) {
    input.classList.add('valid')
     input.classList.remove('invalid')
  } else {
    input.classList.add('invalid')
     input.classList.remove('valid')
  }
})