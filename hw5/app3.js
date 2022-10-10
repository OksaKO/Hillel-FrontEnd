let digit1=parseInt(prompt('Input 1st digit'));
let digit2=parseInt(prompt('Input 2nd digit'));
if (digit1 === digit2) {
    alert('these numbers are equal');
}
else 
    if (digit1 % digit2 === 0) {
        alert(digit2 +' is the divisor of ' + digit1);
    } 
    else 
        if (digit2 % digit1 === 0) {
            alert(digit1 +' is the divisor of ' + digit2);
        } 
