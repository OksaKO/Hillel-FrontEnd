let digit = parseInt(prompt('Input  digit'));
let third = digit % 10;
let second = ((digit - third) / 10) % 10;
let first = (digit - digit % 100) / 100;
if ((first === second) && (second === third)) {
    alert('all numbers are the same');
}
else
    if ((first === second) || (second === third) || (first === third)) {
        alert('two numbers are the same');
    }
    else {
        alert('all numbers are different');
    }