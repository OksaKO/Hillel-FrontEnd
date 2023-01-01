let photo = document.querySelector("img");
let nPhoto = 1;
let timer = 3000;
let interval = setInterval(changePhoto, timer);
document.querySelector("#left").addEventListener('click', function(){
    if (nPhoto ===1){
        nPhoto = 5;
    } else {
        nPhoto--;
    }
    photo.src="images/"+ nPhoto+ ".jpg";
    clearInterval(interval);
    interval = setInterval(changePhoto, timer);     
})
document.querySelector("#right").addEventListener('click', function(){
    if (nPhoto ===5){
        nPhoto = 1;
    } else {
        nPhoto++;
    }
    photo.src="images/"+ nPhoto+ ".jpg";
    clearInterval(interval); 
    interval = setInterval(changePhoto, timer);       
})
function changePhoto(){
    
    if (nPhoto===5){
        nPhoto = 1;
    } else {
        nPhoto++;
    };
    photo.src="images/"+ nPhoto+ ".jpg";    
}

