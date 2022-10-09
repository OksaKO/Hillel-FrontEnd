let digit=Number(prompt('Input  digit'));
let third=digit%10;
let second=((digit-last)/10)%10;
let first=(digit-digit%100)/100;
let sum=first+second+third;
alert(parseInt(sum));
