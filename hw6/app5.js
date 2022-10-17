let left = parseInt(prompt('Input left digit' ));
let right = parseInt(prompt('Input right digit' ));
let mul = 1;
for (let i = left; i <= right; i++){
    mul *= i;
}
console.log (mul);