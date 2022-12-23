let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let imgH1 = document.querySelector('#h1');
imgH1.src = "images/"+ Math.floor(h/10) + ".png";
let imgH2 = document.querySelector('#h2');
imgH2.src = "images/"+ h%10 + ".png";
let imgM1 = document.querySelector('#m1');
imgM1.src = "images/"+  Math.floor(m/10) + ".png";
let imgM2 = document.querySelector('#m2');
imgM2.src = "images/"+ m%10 + ".png";
let imgS1 = document.querySelector('#s1');
imgS1.src = "images/"+  Math.floor(s/10) + ".png";
let imgS2 = document.querySelector('#s2');
imgS2.src = "images/"+ s%10 + ".png";

function changeTime(){
    s++;
    if ( s===60 ){
       m++; 
       s=0;
    };
    if ( m===60) {
        h++;
        m=0;
    };
    if (h===24){
        h=0;
    }
    imgS1.src = "images/"+  Math.floor(s/10) + ".png";
    imgS2.src = "images/"+ s%10 + ".png";
    imgM1.src = "images/"+  Math.floor(m/10) + ".png";
    imgM2.src = "images/"+ m%10 + ".png";
    imgH1.src = "images/"+ Math.floor(h/10) + ".png";
    imgH2.src = "images/"+ h%10 + ".png";
}
setInterval(changeTime, 1000);


