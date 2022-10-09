let digit1=parseFloat(prompt('Input distance in kilometers'));
let digit2=parseFloat(prompt('Input distance in feet'));
digit1*=1000;
digit2*=0.305;
if (digit1<digit2) {
    alert('the distance in kilometers is less');
}
else if (digit1>digit2) {
    alert('the distance in feet is less');
} 
else {
    alert ('equality');
}