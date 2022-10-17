let left = parseInt(prompt('Input left digit' ));
let right = parseInt(prompt('Input right digit' ));
for (let i = left; i <= right; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
}
