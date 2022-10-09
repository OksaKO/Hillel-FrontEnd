let digit = parseInt(prompt('Input  digit'));
let third = digit % 10;
let second = ((digit - third) / 10) % 10;
let first = (digit - digit % 100) / 100;
let sum = first + second + third;
alert('Sum = ' + sum);
if (sum % 2 == 0) {
    alert('Сумма четная');
}
else {
    alert('Сумма нечетная');
}
if (sum % 5 == 0) {
    alert('Сумма кратна 5');
}
else {
    alert('Сумма не кратна 5');
}
if (first * second * third > 100) {
    alert('Произведение больше 100');
}
else {
    alert('Произведение меньше 100');
}
