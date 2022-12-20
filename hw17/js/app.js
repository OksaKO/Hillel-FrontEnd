// Создать CRUD-приложение (Create, Read, Update, Delete):
// Выводится список пользователей с кнопками “Edit”, “Remove”, “View” возле каждого пользователя (исп. data-id attributes или event delegation)
// список пользователей получать из js-файла (массив простых объектов или использовать функции-конструкторы - по желанию)
// При клике на кнопку “View” - сбоку открываются данные пользователя (имя, логин и т.д.)
// При клике на кнопку “Edit” появляется возможность редактировать данные пользователя в блоке под списком.
// Данные сохраняются при клике на кнопку “Save” и обновляют данные в списке
// При клике на кнопку “Remove” пользователь удаляется из списка
// Обязательно запросить подтверждение удаления (для избежания удаления по ошибке)
// Реализовать возможность добавления новых пользователей с помощью кнопки Add
// Кнопка Add над списком пользователей
// Желательно переиспользовать форму редактирования
// При добавлении пользователь появляется в списке
// После перезагрузки страницы все изменения должны сохраняться (использовать localStorage)
// Реализовать валидацию с помощью регулярных выражений при редактировании и добавлении пользователей
// Данные каждого пользователя:
// Имя
// Пароль
// Возраст
// Email
// Номер телефона
// Номер банковской карты
// Регулярные выражения для имени, e-mail, номера телефона, возраста, номера карты\
const validators = {
    uName: {
        regExp: /^[A-Z][a-z]{1,}$/,
        errorMessage: 'Name is incorrect',
    },
    age: {
        regExp: /^\d{2}$/,
        errorMessage: 'Age is incorrect',
    },
    email:{
        regExp: /^[A-Z]|[a-z]|[0-9]|_|-{1,}@[a-z]|[0-9]{1,}.[a-z]|[0-9]{1,}$/,
        errorMessage: 'Email is incorrect',
    },
    phone:{
        regExp: /^\d{10}$/,
        errorMessage: 'Phone is incorrect',
    },
    card: {
        regExp: /^\d{16}$/,
        errorMessage: 'Card is incorrect',
    },
}

function showUsers (){
// Проверка, есть ли данные в локальном хранилище
    const uList = JSON.parse(localStorage.getItem('users'));
    if ((localStorage.length === 0)||(uList.length ===0)){
        localStorage.setItem('users', JSON.stringify(users));
    }
    createList();
    let flag = -1; // проверка на добавление и редактирование
    const btnAdd = document.querySelector("#add");
    btnAdd.addEventListener('click', btnAddHandler);
    
    const btnSave = document.querySelector("[name = 'save']");
    btnSave.addEventListener('click', formHandler);
    
    // Создание списка пользователей
    function createList(){
        const dShowUsers = document.querySelector("#usersList");
        dShowUsers.textContent = '';
        const usersList = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < usersList.length; i++){
            const elem = document.createElement('div');
            elem.textContent = usersList[i].name;
            elem.setAttribute('number', i);
            dShowUsers.appendChild(elem);
            btnCreate ('view', i, elem, btnViewHandler);
            btnCreate ('Edit', i, elem, btnEditHandler);
            btnCreate ('Remove', i, elem, btnRemoveHandler);

        }
    }
    // обработчик кнопки добавления пользователя   
    function btnAddHandler(){
        flag = -1;
        document.querySelector('form[name = "userEdit"]').reset();
        const elem = document.querySelector('form[name = "userEdit"]');
        elem.style.display = 'block';
        const elem2 = document.querySelector('#userView');
        elem2.style.display = 'none';
    }

    // обработчик кнопки просмотра пользователя
    function btnViewHandler(event){
        const userN = event.target.getAttribute('user-number');
        const elem = document.querySelector('#userView');
        elem.style.display = 'block';
        const elem2 = document.querySelector('form[name = "userEdit"]');
        elem2.style.display = 'none';
        const usersList = JSON.parse(localStorage.getItem('users'));
        elem.innerHTML = ` Имя пользователя: ${usersList[userN].name} <p> Пароль: ${usersList[userN].pass} </p> <p>Возраст:  ${usersList[userN].age} </p> <p>Почта:  ${usersList[userN].email} </p> <p>Телефон: ${usersList[userN].phone} </p> <p>Банковская карта: ${usersList[userN].card} </p>`;
    }

    // обработчик кнопки редактирования пользователя
    function btnEditHandler(event){
        const userN = event.target.getAttribute('user-number');
        const elem = document.querySelector('form[name = "userEdit"]');
        const usersList = JSON.parse(localStorage.getItem('users')); 
        flag = userN;
        elem.uName.value =  usersList[userN].name;
        elem.pass.value =  usersList[userN].pass;
        elem.age.value =  usersList[userN].age;
        elem.email.value =  usersList[userN].email;
        elem.phone.value =  usersList[userN].phone;
        elem.card.value =  usersList[userN].card;
        elem.style.display = 'block';
        const elem2 = document.querySelector('#userView');
        elem2.style.display = 'none';

    }

    // обработчик кнопки удаления пользователя
    function btnRemoveHandler(event){
        const userN = event.target.getAttribute('user-number');
        const elem = document.querySelector('#userView');
        elem.style.display = 'none';
        const elem2 = document.querySelector('form[name = "userEdit"]');
        elem2.style.display = 'none';
        const usersList = JSON.parse(localStorage.getItem('users'));
        usersList.splice(userN,1);
        localStorage.setItem('users', JSON.stringify(usersList));
        createList();
        if (usersList.length === 0) {
            localStorage.removeItem('users');
        }        
    }

    // обработчик данных в форме
    function formHandler(){
        const {
            uName:{value:uName},
            age: {value: age},
            pass:{value: pass},
            email: {value: email},
            phone: {value: phone},
            card: {value: card},
        } = document.querySelector('form[name = "userEdit"]');
        if (validate({
            uName, age, email, phone, card,
        })){
            console.log('start');
            const usersList = JSON.parse(localStorage.getItem('users'));
            const userData = {name: uName, pass: pass, age: age, email: email, phone: phone, card: card}
            if (flag === -1) {
                    usersList.push(userData)
                }
                else {
                    usersList[flag] = userData;
                }
            localStorage.setItem('users', JSON.stringify(usersList));
            createList();
            document.querySelector('form[name = "userEdit"]').reset();
        } else {
            console.log('Исправьте и сохраните заново')
            const errElem = document.querySelector('#errorDiv');
            errElem.textContent += ('Исправьте и сохраните заново'); 
        }
           
    
    }
 function validate (args){
                let validFields = 0;
                let fieldsCount = 0;
                for (let key in validators){
                    fieldsCount++;
                    if (validators[key].regExp.test(args[key])){
                        validFields++;
                                            
                    } else {
                        const errElem = document.querySelector('#errorDiv');
                        errElem.textContent += validators[key].errorMessage;

                    }
                }
             return validFields===fieldsCount;
            }
}

// создание кнопки
function btnCreate (attr, n, parent, handler){
    const btn = document.createElement('button');
    btn.setAttribute("user-operation", attr);
    btn.setAttribute("user-number", n);
    btn.textContent = attr;
    btn.addEventListener('click', handler);
    parent.appendChild(btn);
}


showUsers();
