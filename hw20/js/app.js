let data = []; // массив полученных данных
let category = ''; //страница, с которй работаем
let nextPage = '';
menu();

// обработка кнопок меню
function menu(){
    document.querySelector("#People").addEventListener('click',() => {
        category = 'people';
        nextPage = 'https://swapi.dev/api/people/?page=1';
        queryInfo(nextPage);  
    });
    document.querySelector("#Planets").addEventListener('click',() => {
        category = 'planets';
        nextPage = 'https://swapi.dev/api/planets/?page=1';
        queryInfo(nextPage);
    });
    document.querySelector("#Vehicles").addEventListener('click', () => {
        category = 'vehicles';
        nextPage = 'https://swapi.dev/api/vehicles/?page=1';
        queryInfo(nextPage);
    });
    
}

// запрос информации с сервера
function queryInfo(link){
    axios.get (link)
        .then(result => {
                        data = result.data.results;
                        nextPage = result.data.next; 
                        
                        if (nextPage === null) {
                            let elem = document.querySelector("#next");
                            elem.style.display = "none";   
                        }
                        createList (data);
                        })
        .catch(error => {
                        let elem = document.querySelector("#next");
                           elem.style.display = "none"; 
                    })
        
    }

// создание списка объектов
function createList(unit){
    let list = document.querySelector("#list");
    list.textContent = "";
    let infoElem = document.querySelector('#info');
    infoElem.innerHTML = "";
    for (let i = 0; i < unit.length; i++) {
        let elem = document.createElement('div');
        elem.textContent =unit[i].name;
        list.appendChild(elem);
        elem.setAttribute('unit-num', i);
        elem.addEventListener('click', showInfo);
    }
    let elem = document.querySelector("#next");
    elem.style.display = "block";
}
let elem = document.querySelector("#next");
elem.addEventListener('click', () => {
    queryInfo(nextPage);
} );


// отображение информации
function showInfo(event){
    const num = event.target.getAttribute('unit-num');
    let infoElem = document.querySelector('#info');
    infoElem.innerHTML = "";
        if (category === 'people') {
            infoElem.innerHTML = `Имя: ${data[num].name} <br/>  Рост: ${data[num].height}<br/> Вес: ${data[num].mass}<br/> Цвет волос: ${data[num].hair_color}<br/> Цвет глаз: ${data[num].eye_color}`;
        } else if (category === 'planets') {
            infoElem.innerHTML = `Имя: ${data[num].name} <br/>  Период обращения: ${data[num].rotation_period}<br/> Орбитальный период: ${data[num].orbital_period}<br/> Диаметр: ${data[num].diameter}<br/> Климат: ${data[num].climate}<br/> Население: ${data[num].population}`;
        } else {
            infoElem.innerHTML = `Имя: ${data[num].name} <br/> Модель: ${data[num].model}<br/> Производитель: ${data[num].manufacturer}<br/> Длина: ${data[num].length}<br/> Скорость в атмосфере: ${data[num].max_atmosphering_speed}<br/> Пассажиры: ${data[num].passengers}`;
        }
}
