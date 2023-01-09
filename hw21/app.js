// Сеть фастфудов предлагает несколько видов гамбургеров:
// - маленький (50 тугриков, 20 калорий)
// - большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:
// - сыром (+ 10 тугриков, + 20 калорий)
// - салатом (+ 20 тугриков, + 5 калорий)
// - картофелем (+ 15 тугриков, + 10 калорий)
// Можно добавить добавки:
// - посыпать приправой (+ 15 тугриков, 0 калорий)
// - полить майонезом (+ 20 тугриков, + 5 калорий).
// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход
// (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин)
// Пример работы кода:
// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger{
    constructor (size, stuffing){
        this.size = size;
        this.stuffing = stuffing;
    }
    addTopping(){

    }
    calculatePrice(priceIn){
       price += priceIn; 
       resPrice.value = price;
        
    }
    calculateCalories(caloriesIn){
        calories += caloriesIn;
        resCalories.value = calories;
    }
    changeSize(size) {
        this.size = size;
    }
    changeStuffing(stuffing){
        this.stuffing = stuffing;
    }
}

let hamburger = new Hamburger('','');
let price = 0,
bigP = 100, smallP =50,
cheeseP = 10, saladP = 20, potatoP = 15, 
mayonnaiseP = 20, seasoningP = 15;
let calories = 0;
let bigC = 40, smallC =20,
cheeseC = 20, saladC = 5, potatoC = 10,
mayonnaiseC = 5, seasoningC = 0;
const resPrice = document.querySelector("#price");
const resCalories  = document.querySelector("#calories");
//SIZE

const sizeEl = document.getElementsByName("size");
let priceS = 0, caloriesS = 0;
sizeEl.forEach (elem => elem.addEventListener('change', ()=> {
    if (elem.checked){
        hamburger.changeSize(elem.value);
        if (elem.value === 'big'){
            hamburger.calculatePrice(bigP - priceS);
            priceS = bigP;
            hamburger.calculateCalories(bigC - caloriesS);
            caloriesS = bigC;
        } else{
            hamburger.calculatePrice(smallP - priceS);
            priceS = smallP;
            hamburger.calculateCalories(smallC - caloriesS);
            caloriesS = smallC;
        }
    }
}))

//STUFFING
const stuffing = document.getElementsByName("stuffing");
let priceSt = 0, caloriesSt = 0;
stuffing.forEach (elem => elem.addEventListener('change', ()=> {

    if (elem.checked){
        hamburger.changeSize(elem.value);
        if (elem.value === 'cheese'){
            hamburger.calculatePrice(cheeseP-priceSt);
            priceSt = cheeseP;
            hamburger.calculateCalories(cheeseC - caloriesSt);
            caloriesSt = cheeseC;
        } else if (elem.value === 'salad'){
            hamburger.calculatePrice(saladP - priceSt);
            priceSt = saladP;
            hamburger.calculateCalories(saladC - caloriesSt);
            caloriesSt = saladC;
        } else {
            hamburger.calculatePrice(potatoP - priceSt);
            priceSt = potatoP;
            hamburger.calculateCalories(potatoC - caloriesSt);
            caloriesSt = potatoC;
        }
        
    }
}))

//TOPPING
let top1 = document.querySelector("#topping1");
top1.addEventListener('change', () => {
    if (top1.checked){
        hamburger.calculatePrice(mayonnaiseP);
        hamburger.calculateCalories(mayonnaiseC);
    } else {
        hamburger.calculatePrice(-mayonnaiseP);
        hamburger.calculateCalories(-mayonnaiseC);
    }
})
let top2 = document.querySelector("#topping2");
top2.addEventListener('change', () => {
    if (top2.checked){
        hamburger.calculatePrice(seasoningP);
        hamburger.calculateCalories(seasoningC);
    } else {
        hamburger.calculatePrice(-seasoningP);
        hamburger.calculateCalories(-seasoningC);
    }
})


