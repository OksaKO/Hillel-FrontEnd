let digit = parseInt (prompt('Input digit'));
let cent = Math.sqrt(digit); 
for (let i = 1; i < cent; i++) {
    if ( digit % i === 0) {
        console.log (i);
        console.log (digit / i);
    }
}
if (cent ** 2 === digit) {
    console.log(cent);
}