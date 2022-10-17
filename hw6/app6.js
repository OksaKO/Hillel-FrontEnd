let left = parseInt(prompt('Input left digit' ));
let right = parseInt(prompt('Input right digit' ));
let sum = 0;
for (let i = left;  i <= right; i++){
    sum += i;
}
let average = sum / 500;
console.log (average);