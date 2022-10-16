let digit = parseInt (prompt('Input digit'));
let cent = Math.sqrt(digit); 
let count = 0;
for (let i = 1; i < cent; i++) {
    if ( digit % i === 0) {
        let div = digit / i;
        if (i % 2 === 0) {
            count++;
        }
        if (div % 2 === 0){
            count++;
        }
    }
}
if ((cent ** 2 === digit) && (cent % 2 === 0) ) {
    count++;
}
console.log(count);