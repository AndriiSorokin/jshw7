const list = document.querySelector('#categories')
const items = document.querySelectorAll('.item')
console.log(`В списке ${list.children.length} категории`); 

items.forEach((item) =>
  console.log(
    `Категория: ${item.querySelector("h2").textContent} Количество элементов: ${
      item.querySelectorAll("li").length
    }`
  )
);

