let digit = parseInt(prompt('Input  digit'));
let second = digit % 10;
let first = (digit - second) / 10;
if (second < first) {
    alert('First digit is bigger');
} 
else if (second > first) {
    alert('Second digit is bigger');
}
else {
    alert('these numbers are equal'); 
}
