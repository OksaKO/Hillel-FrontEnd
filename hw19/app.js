let photo = document.querySelector("img");
let nPhoto = 1;
setInterval(changePhoto, 3000);
document.querySelector("#left").addEventListener('click', function(){
    if (nPhoto ===1){
        nPhoto = 5;
    } else {
        nPhoto--;
    }
    photo.src="images/"+ nPhoto+ ".jpg";
})
document.querySelector("#right").addEventListener('click', function(){
    if (nPhoto ===5){
        nPhoto = 1;
    } else {
        nPhoto++;
    }
    photo.src="images/"+ nPhoto+ ".jpg";
})
function changePhoto(){
    
    if (nPhoto===5){
        nPhoto = 1;
    } else {
        nPhoto++;
    };
    photo.src="images/"+ nPhoto+ ".jpg";
    
}

