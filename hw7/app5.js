let digit = parseInt (prompt('Input digit'));
let pow3 = 1;
while (pow3 < digit) {
    pow3 *= 3;
}
if (pow3 === digit) {
    alert('Yes');
}
else {
    alert('No');
}