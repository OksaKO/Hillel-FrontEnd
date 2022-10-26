/* Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak. Оба числа и знак получаются от пользователя.*/
let num1 = parseInt(prompt('Input 1st operand '));
let sign = prompt('Input action sign');
let num2 = parseInt(prompt('Input 2nd operand '));
function doMath(x, znak, y){
    switch (znak) {
        case '+': 
            return x+y;
            break;
        case '-':
            return x-y;
            break;
        case '*':
            return x*y;
            break;
         case '/':
            return x/y;
            break;
         case '%':
            return x%y;
            break;
         case '^':
            return x^y;
            break;
        default:
            return 'non-existent operation';
            break;
    }
}
let res = doMath(num1, sign, num2);
console.log(`${num1}  ${sign}  ${num2} = ${res}`);