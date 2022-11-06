// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки полученное случайным образом (Math.random)
function getRandomInt() {
    return Math.floor(Math.random() * 9) + 1; 
  }
function getImage(){
    let image = document.querySelector('.image');
    image.src = 'images/' + getRandomInt() +'.jpg';
}
getImage();