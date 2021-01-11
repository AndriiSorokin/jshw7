const input = document.querySelector('#name-input')
const nameRef = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
  if (event.target.value === '') {
    return (nameRef.textContent = 'незнакомец!')
  } else return (nameRef.textContent = event.target.value)
})
