const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

// Show products
function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${(i+1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
  }
}

// Get product number
function getProductNumber(){
  do {
    productNumber = prompt('Enter the product you wanna buy:');
    productNumber--;
  } while(productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
  selectedProduct = products[productNumber];
}

// Get amount of products to be bought
function getAmountProducts(){
  do {
    amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
  } while(amount <= 0 || isNaN(amount));
}

// Calculate the initial price
function initialPrice (){
  finalPrice = selectedProduct.price * amount;
}

// Check if discount needed
function checkDiscount(){
  if (finalPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
    console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
    discount =  finalPrice * DISCOUNT;
  } else {
    discount = 0;
  }
}

// Calculate final price
function calcFinalPrice(){
   superFinalPrice = finalPrice - discount;
   console.log('Please pay $' + superFinalPrice);
}

function shop(){
  let productNumber;
  let amount;
  let selectedProduct;
  let finalPrice;
  let superFinalPrice;
  let discount;
  showProducts();
  getProductNumber();
  getAmountProducts();
  initialPrice();
  checkDiscount();
  calcFinalPrice();  
}

shop();

