/* Написать функцию заполнения пользовательскими данными двумерного массива. Длину основного массива и внутренних массивов задаёт пользователь. Значения всех элементов всех массивов задаёт пользователь. */
const arr = [];
let lengthMainArray = parseInt(prompt('Input length of main array'));
function fillingArray(len){
    let elem;
    
    for (let i = 0; i < len; i++){
        let lengthInnerArray = parseInt(prompt(`Input length of inner array # ${i}  level`));
        arr[i] = [];
        for (let j = 0; j < lengthInnerArray; j++) {
            elem = parseInt(prompt(`Input element # ${j} from level # ${i}`));
            arr[i].push(elem);
        }
    }
}
function arrayOutput(){
    for (let i = 0; i < lengthMainArray; i++){
        document.write(`${arr[i]} <br>`);
    }
}
fillingArray(lengthMainArray);
arrayOutput();