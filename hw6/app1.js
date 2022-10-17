let left = parseInt(prompt('Input left digit' ));
let right = parseInt(prompt('Input right digit' ));
let str = left;
for (let i= left+1; i<= right; i++){
    str += ', ' + i;
}
document.write(str);