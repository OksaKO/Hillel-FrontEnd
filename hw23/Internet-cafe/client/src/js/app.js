import '../scss/styles.scss';


import { createCheckoutForm, createElement, createProductCard, updateProductPrice } from './helpers/domHelpers.js';
import {API_CATEGORIES_LIST, API_PRODUCTS_BY_CATEGORY_ID} from './urls.js';

let productsArr = [];
let currentProduct = {};

const changeSizeHandler = function(event) {
  const size = event.target.value; //
  if (size === 'big') {
    currentProduct.updatedPrice = currentProduct.price * 1.2;
  } else {
    currentProduct.updatedPrice = currentProduct.price;
  }

  updateProductPrice(currentProduct.updatedPrice);
}

const changeToppingHandler = function(event) {
  const toppingName = event.target.value;
  const topping = currentProduct.available_toppings.find(topping => topping.name === toppingName);

  currentProduct.updatedPrice = currentProduct.price + topping.price;
  updateProductPrice(currentProduct.updatedPrice);
}

const clickBuyHandler = function(event) {
  const productId = event.target.getAttribute('data-product-id'); // ok
  currentProduct = productsArr.find(product => product.id === productId);
  currentProduct.updatedPrice = currentProduct.price;
  createCheckoutForm(currentProduct, changeSizeHandler, changeToppingHandler);
}

const menuItemClickHandler = function(event) {
  const currentId = event.target.getAttribute('data-menu-item');
  
  fetch(API_PRODUCTS_BY_CATEGORY_ID.replace(':category', currentId))
    .then(res => res.json())
    .then(products => {
      productsArr = products;

      document.querySelector('#content').innerHTML = '';
      for(let product of products) {
        createProductCard(product, clickBuyHandler);
      }

    })
}


// onload:
fetch(API_CATEGORIES_LIST)
  .then(res => res.json())
  .then(categories => {

    for(let category of categories) {
      createElement(
        'li',
        category.name, 
        {
          'data-menu-item': category.id
        },
        {
          click: menuItemClickHandler
        },
        '#menu ul'
      );
    }
  })