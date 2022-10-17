let left = parseInt(prompt('Input left digit' ));
let right = parseInt(prompt('Input right digit' ));
let sum = 0;
for (let i = left; i <= right; i++){
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);