const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')
const createList = document.createElement('li')

const addItems = ingredients.map((el) => {
  const createList = document.createElement('li')

  createList.textContent = el;
  list.append(createList)
})
