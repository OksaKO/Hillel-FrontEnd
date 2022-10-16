let N = parseInt (prompt('Input digit'));
let sqr;
for (let i = 1; i <= 100; i++){
    sqr = i**2;
    if (sqr > N) {
        break;
    }
    console.log(i);
}