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
// Создаем базу владельцев авто
function baseOwners(){
    owner1 = createOwner();
    owner2 = createOwner();
    owner3 = createOwner();
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
function baseAutos(){
    auto1 = createAuto();
    auto2 = createAuto();
    auto3 = createAuto();    
}
