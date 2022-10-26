let digit = parseInt(prompt('Input digit'));
let deg = parseInt(prompt('Input degree'));
function pow(num, degree){
    if (degree == 0) {
        return 1;
    }
    else {
        return num * pow(num, degree-1);
    }
}
console.log(pow(digit, deg));