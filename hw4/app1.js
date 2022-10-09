let yearOfBorn = prompt('Какой год твоего рождения?');
let phrase = '';
if (yearOfBorn == undefined) {
    alert ('Жаль, что Вы не захотели ввести свой год рождения');
} 
else {let today = new Date();
    let year = today.getFullYear();
    let age = year - yearOfBorn;
    phrase += 'Тебе '+ age + ' лет \n';
}
let town = prompt('В каком городе ты живешь?');
if (town == undefined) {
    alert ('Жаль, что Вы не захотели указать свой город');
}
else {
    switch (town) {
        case 'Киев':
            phrase += 'Ты живешь в столице Украины\n';
            break;
        case 'Вашингтон':
            phrase += 'Ты живешь в столице США\n';
            break;
        case 'Лондон':
            phrase += 'Ты живешь в столице Великобритании\n';
            break;
        default:
            phrase += 'Ты живешь в городе ' + town + '\n';
            break;
    }
}
let sport = prompt ('Какой твой любимый вид спорта?');
if (sport == undefined) {
    alert ('Жаль, что Вы не захотели сказать свой любимый спорт');
}
else {
    switch (sport) {
        case 'биатлон', 'Биатлон':
            phrase += 'Круто! Хочешь стать, как Мартен Фуркад?';
            break;
        case 'бокс', 'Бокс':
            phrase += 'Круто! Хочешь стать, как Джермелл Чарло?';
            break;
        case 'карате', 'Карате':
            phrase += 'Круто! Хочешь стать, как Али Софуоглу?';
            break;
        default:
            phrase += 'Спорт - это здоровье!';
            break;
    }
}
alert (phrase);