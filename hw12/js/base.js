// Создаем сущность человека
function createOwner(){
    let ownerName, ownerAge;
    do {
       ownerName = prompt ('Input name'); 
    } while (ownerName ==='');
    do {
        ownerAge = prompt ('Input age > 17'); 
        if (ownerAge < 18) {
            alert ('Age < 18!');
            ownerAge ='';            
        }
    } while (ownerAge ==='');
    ownerAge = parseInt(ownerAge);
    return new Person (ownerName, ownerAge);
}
// Создаем сущность автомобиля
function createAuto(){
    let autoModel, autoYear, autoVolume;
    do {
        autoModel = prompt ('Input Model'); 
    } while (autoModel ==='');
    do {
        autoYear = prompt ('Input year of issue'); 
    } while (autoYear ==='');
    do {
        autoVolume = prompt ('Input engine volume'); 
    } while (autoVolume ==='');
    return new Auto (autoModel, autoYear, autoVolume);
}
// Создаем базу авто

function createBase(){
    let owners = [];
    for (let i = 0; i < 3; i++) {
        owners [i] = createOwner();
    }
    let autos = [];
    for (let i = 0; i < 3; i++) {
        autos[i] = createAuto();
        autos[i].setOwners(owners[i]);
    }
    return autos;
}
function showBase(auto){
    for (let i = 0; i < 3; i++) {
        auto[i].showInfo();        
    }
}