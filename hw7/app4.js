let digit = parseInt (prompt('Input digit'));
let cent = Math.sqrt(digit); 
let count = 0;
for (let i = 1; i < cent; i++) {
    if ( digit % i === 0) {
        count++;
    }
}
if (count === 2) {
    console.log (digit + ' - простое число');
}
else {
    console.log (digit + ' - не является простым числом');
}
console.log (count);