/* Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд. Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28*/
let res = 0;
function sum (p){
    res += p;
}
sum(4);
sum(12);
sum(20);
sum(100);
document.write(res);