let digit = parseInt(prompt('Input  digit'));
let secondPart = digit % 1000;
let firstPart = (digit - secondPart)/1000;
let secondPart1 = secondPart % 10;
let secondPart2 = ((secondPart - secondPart1) / 10) % 10;
let secondPart3 = (secondPart - secondPart % 100) / 100;  
let secondPartInv = secondPart1 * 100 + secondPart2 * 10 + secondPart3;
if (firstPart === secondPartInv) {
    alert ('Это зеркальное число');
}
else {
    alert ('Это не зеркальное число');
}