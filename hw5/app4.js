let digit=parseInt(prompt('Input  digit'));
let last=digit%10;
if (last % 2 === 0) {
    alert('Четная, '+last);
}
else {
    alert('Нечетная, '+last);
}
