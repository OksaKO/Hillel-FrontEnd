function handlingField(){
    let field = document.querySelector('.field');
    let divText = document.querySelector('.textP');
    field.addEventListener("mouseover", divTextShow);
    function divTextShow(){
        divText.innerHTML='Вы навели на текстовое поле';
    }
    field.addEventListener("mouseout", divTextClean);
    function divTextClean(){
        divText.innerHTML='';
    }
}
handlingField();