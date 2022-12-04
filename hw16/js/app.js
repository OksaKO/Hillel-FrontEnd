// Модифицировать интернет-магазин таким образом, чтобы была возможность просмотреть все сохраненные заказы даже после обновления страницы (использовать localStorage)
// На странице изначально кроме списка категорий отображается также кнопка “мои заказы”
// При клике на “мои заказы” - пропадают категории и отображается список всех заказов пользователя (дата и цена) - при клике на заказ - “разворачиваются” детали заказа
// Реализовать возможность удаления заказа из списка
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

  const productName = data[categoryIndex].products[productIndex].name;
  const productPrice = data[categoryIndex].products[productIndex].price;
  const elemName = document.createElement('div');
  elemName.textContent =`Название: ${productName}`;
  container.appendChild(elemName);

  const elemPrice = document.createElement('div');
  elemPrice.textContent =`Цена: ${productPrice}`;
  container.appendChild(elemPrice);

  const productDescription = data[categoryIndex].products[productIndex].description;
  const elemDescription = document.createElement('div');
  elemDescription.textContent =`Описание: ${productDescription}`;
  container.appendChild(elemDescription);

  const button = document.createElement('button');
  button.textContent ='Купить';
  container.appendChild(button);
  button.addEventListener('click', showForm);
    
  function showMessage(){
    container.innerHTML = '';
    const message = document.createElement('div');
    message.textContent =`Вы купили: ${data[categoryIndex].products[productIndex].name}`;    
    container.appendChild(message);
  }
  
  function showForm() {
    const divOrder = document.querySelector('#formOrder');
    divOrder.style.display = 'block';
    const btnSend = document.querySelector('#btnSend');
    btnSend.addEventListener('click', formHendler);

  }
function formHendler(){

  const uName = document.forms.order.userName.value;
  const uCity = document.forms.order.city.value;
  const uStock = document.forms.order.stock.value;
  const pay = document.forms.order.payment.value;
  let count = document.forms.order.countProd.value;
  let comment = document.forms.order.comment.value;
  const orders = JSON.parse(localStorage.getItem('orders'));
  if ((uName === '')||(uCity === 0)||(uStock === 0)||(pay === '')||(count === 0)){
      const err = document.querySelector('#errorMessage');
      err.textContent = ' Не все поля заполнены';
  }
  else {
    orders.push({name : uName, city : uCity, stock: uStock, productName: productName, productPrice: productPrice, pay: pay, count: count, comment: comment}) 
    localStorage.setItem('orders', JSON.stringify(orders));
    document.forms.order.reset();
    const divOrder = document.querySelector('#formOrder');
    divOrder.style.display = 'none'; 

    showOrder();   
  }
  function showOrder(){
    const resultOrder = document.querySelector('#resultOrder');
    resultOrder.innerHTML = `<h2>Ваш заказ, ${orders[0].name}: </h2> <p>Товар: ${orders[0].productName} </p> <p> Цена: ${orders[0].productPrice} </p><p> Количество: ${orders[0].count} </p><p>Способ оплаты: ${orders[0].pay} <h3>Доставка</h3><p>Город: ${orders[0].city}</p> <p>Отделение почты: ${orders[0].stock}</p>`
  }
}
}
function btnOrdersHendler(){
  document.querySelector(".container").innerHTML = "";
  document.querySelector("#resultOrder").outerHTML = "";
  document.querySelector("#btnOrders").style.display = "none";
  let orderList =JSON.parse(localStorage.getItem('orders'));
  for (let i = 0; i < orderList.length; i++ ){
    const containerOrder = document.createElement('div');
    containerOrder.setAttribute('order', i);
    document.querySelector("#report").appendChild(containerOrder);
    const elem = document.createElement('div');
    elem.setAttribute('data-order', i);
    elem.textContent = `Продукт: ${orderList[i].productName}  . Цена: ${orderList[i].productPrice}` ;
    elem.addEventListener('click', showOrderHist);
    containerOrder.appendChild(elem);
    const elemS = document.createElement('div');
    elemS.setAttribute('show-order', i);
    elemS.innerHTML = ``;
    containerOrder.appendChild(elemS);
    const btnDel  = document.createElement('button');
    btnDel.setAttribute('data-order', i);
    btnDel.textContent = `x` ;
    btnDel.addEventListener('click', orderDelete);
    containerOrder.appendChild(btnDel);
  }
}
function showOrderHist(event){
  let orderList =JSON.parse(localStorage.getItem('orders'));
  const productIndex = event.target.getAttribute('data-order');
  const showInfo =   document.querySelectorAll("[show-order]");
  showInfo.forEach(key => key.innerHTML='');
  showInfo[productIndex].innerHTML = `<p>Товар: ${orderList[productIndex].productName} </p> <p> Цена: ${orderList[productIndex].productPrice} </p><p> Количество: ${orderList[productIndex].count} </p><p>Способ оплаты: ${orderList[productIndex].pay} <h3>Доставка</h3><p>Город: ${orderList[productIndex].city}</p> <p>Отделение почты: ${orderList[productIndex].stock}</p>`;;
}
function orderDelete(event){
  let orderList =JSON.parse(localStorage.getItem('orders'));
  const productIndex = event.target.getAttribute('data-order');
  orderList.splice(productIndex,1);
  localStorage.setItem('orders', JSON.stringify(orderList));
 
  event.target.parentElement.innerHTML = "";
  
}

showCategories();
document.querySelector('#btnOrders').addEventListener('click', btnOrdersHendler);

