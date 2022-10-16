let N = parseInt (prompt('Input digit'));
let i = 1;
let sqr = i ** 2;
while ((i <= 100)&&(sqr <= N)) {
    console.log(i);
    i++;
    sqr = i ** 2;
}
