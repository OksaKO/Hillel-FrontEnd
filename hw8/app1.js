let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumPositive = 0, countPositive = 0, 
min = arr[0], max = arr[0], minNumber = 0, maxNumber = 0,
countNegative = 0, 
countBinPositive = 0, sumBinPositive = 0, 
countOddPositive = 0, sumOddPositive = 0,
productPositive = 1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0) {
        /* Найти сумму и количество положительных элементов, произведение.*/
        sumPositive += arr[i];
        countPositive++;  
        productPositive *= arr[i];
        /* Найти количество и сумму нечетных положительных элементов.*/
        if (arr[i] % 2 === 1) {
            countOddPositive ++;
            sumOddPositive += arr[i];            
        }
    }
    /* Определить количество отрицательных элементов.*/
    else if (arr[i]<0) {
        countNegative++;        
    }
    /* Найти минимальный элемент массива и его порядковый номер.*/
    if (arr[i] < min) {
        min = arr[i];
        minNumber = i;
    }
    /*Найти максимальный элемент массива и его порядковый номер.*/
    if (arr[i] > max) {
        max = arr[i];
        maxNumber = i;
    }    
}
/* Найти количество и сумму четных положительных элементов.*/
countBinPositive = countPositive - countOddPositive;
sumBinPositive = sumPositive - sumOddPositive;
console.log('Sum of positive elements: ' + sumPositive);
console.log('Quantity of positive elements: ' + countPositive);
console.log(`Minimal element: ${min}. His number: ${minNumber}`);
console.log(`Maximal element: ${max}. His number: ${maxNumber}`);
console.log(`Quantity of negative elements: ${countNegative}`);
console.log(`Quantity of odd positive elements: ${countOddPositive}`);
console.log(`Quantity of binate positive elements: ${countBinPositive}`);
console.log(`Sum of odd positive elements: ${sumOddPositive}`);
console.log(`Sum of binate positive elements: ${sumBinPositive}`);
console.log(`Product of positive elements: ${productPositive}`);
/* Найти наибольший среди элементов массива, остальные обнулить.*/
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != max) {
        arr[i] = 0;
    }
    console.log(arr[i]);
}

