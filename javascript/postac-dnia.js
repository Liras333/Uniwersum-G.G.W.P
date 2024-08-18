const obrazy = document.querySelectorAll('.obraz-postaci img');
const nazwy = document.querySelectorAll('.opis-postaci .nazwa');
let postac_zdjecie = document.querySelector('.postac-dnia')
let postac_nazwa = document.querySelector('.img-baner p strong')

const obrazy_tablica = [];
const nazwy_tablica = [];


obrazy.forEach((obraz) => {
    obrazy_tablica.push(obraz.src);
})

nazwy.forEach((nazwa) => {
    nazwy_tablica.push(nazwa.textContent);
})

function strToTime(year, month, day) {
    const date = new Date(year, month - 1, day);
    const yesterday = new Date(year, month - 1, day - 1);
    let minuty = Math.floor(date.getTime() / 1000);
    let index = minuty % obrazy_tablica.length;


    //sprawdzanie poprawnosci danych

    if (yesterday % obrazy_tablica.length == date % obrazy_tablica.length) {
        index = (Math.floor(minuty / 4.12)) % obrazy_tablica.length;
    }
    if (index < 0) {
        index = (Math.floor(minuty / 3.14)) % obrazy_tablica.length;
    }
    else if (index > obrazy_tablica.length) {
        index = Math.floor((minuty % obrazy_tablica.length) / 2)
    }


    //console.log(index);

    postac_zdjecie.src = obrazy_tablica[index];
    postac_nazwa.textContent = nazwy_tablica[index]

}

const data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDay();

strToTime(year, month, day)