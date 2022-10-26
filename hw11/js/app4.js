/* Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor". Исходную строку и символы для удаления задаёт пользователь */
const string = prompt('Input string');
const arrSymbol = [];

function createArraySymbols(){
    let symbol = prompt('Input symbol for delete or close modal window');
    while (symbol !== null) {
        arrSymbol.push(symbol);
        symbol = prompt('Input symbol for delete or close modal window'); 
    }
}
function cleaning(str, symbol){
    let length = str.length;
    for (let i = 0; i < symbol.length; i++){
        let pos = 0;
        while (pos < length) {
            pos = str.indexOf( symbol[i], pos);
            if (pos !== -1){
               str = str.slice(0,pos) + str.slice(pos+1);
                length--;
            } 
            else {
                break;
            }
        }
    }
    return str;
}
createArraySymbols();
let res = cleaning(string, arrSymbol);
document.write(res);

 