function showCategories() {
  const container = document.querySelector('.categories');

  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = data[i].name;
    elem.setAttribute('data-category', i);
    elem.addEventListener('click', showProducts);
    container.appendChild(elem);
  }
} 

// handler of click on categories
function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const products = data[categoryIndex].products;
  const container = document.querySelector('.products');
  container.innerHTML = '';
  const container2 = document.querySelector('.details');
  container2.innerHTML = '';
  
  for(let i = 0; i < products.length; i++) {
    const elem = document.createElement('div');
    elem.textContent = products[i].name;
    elem.setAttribute('data-product', i);
    elem.setAttribute('data-category', categoryIndex);
    elem.addEventListener('click', showDetails);
    container.appendChild(elem);
  }
}

function showDetails(event) {
  const categoryIndex = event.target.getAttribute('data-category');
  const productIndex = event.target.getAttribute('data-product');
  const container = document.querySelector('.details');
  container.innerHTML = '';

  const elemName = document.createElement('div');
  elemName.textContent =`Название: ${data[categoryIndex].products[productIndex].name}`;
  container.appendChild(elemName);

  const elemPrice = document.createElement('div');
  elemPrice.textContent =`Цена: ${data[categoryIndex].products[productIndex].price}`;
  container.appendChild(elemPrice);

  const elemDescription = document.createElement('div');
  elemDescription.textContent =`Описание: ${data[categoryIndex].products[productIndex].description}`;
  container.appendChild(elemDescription);

  const button = document.createElement('button');
  button.textContent ='To bye';
  container.appendChild(button);
  button.addEventListener('click', showMessage);
    
  function showMessage(){
    container.innerHTML = '';
    const message = document.createElement('div');
    message.textContent =`Вы купили: ${data[categoryIndex].products[productIndex].name}`;    
    container.appendChild(message);
  }
  
}

showCategories();