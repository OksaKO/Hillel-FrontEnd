// На странице есть две кнопки. При клике на первую кнопку просим пользователя ввести в prompt ссылку, при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). Реализовать проверку на http / https. Если протокол не указан - добавляем
function twoButton(){
    let url = '';
    function getURL(){
        url = prompt('Input URL');
        if (url.indexOf('http') === -1) {
            url = 'https://' + url;
        }
    }
    function goToURL(){
        window.location.href= url;
    }
    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');
    btn1.addEventListener('click', getURL); 
    btn2.addEventListener('click', goToURL);
}
twoButton();