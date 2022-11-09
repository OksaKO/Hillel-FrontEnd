function handlingField(){
    let field = document.querySelector('.field');
    let divText = document.querySelector('.textP');
    field.addEventListener("focus", divTextShow);
    function divTextShow(){
        divText.innerHTML='Вы выбрали текстовое поле';
    }
    field.addEventListener("blur", divTextClean);
    function divTextClean(){
        divText.innerHTML='';
    }
}
handlingField();