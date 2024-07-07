const obrazy = document.querySelectorAll('.obraz-postaci img');
const nazwy = document.querySelectorAll('.opis-postaci .nazwa');
let postac_zdjecie = document.querySelector('.img-baner img')
let postac_nazwa = document.querySelector('.img-baner p strong')

const obrazy_tablica = [];
const nazwy_tablica = [];

obrazy.forEach((obraz) => {
    obrazy_tablica.push(obraz.src);
})

nazwy.forEach((nazwa) => {
    nazwy_tablica.push(nazwa.textContent);
})

localStorage.setItem('stored_obrazy', obrazy_tablica)
localStorage.setItem('stored_nazwy', nazwy_tablica)

function strToTime(year, month, day) {
    const date = new Date(year, month - 1, day);
    let minuty = Math.floor(date.getTime() / 1000);

    let index = minuty % obrazy_tablica.length - 1;

    postac_zdjecie.src = obrazy_tablica[index];
    postac_nazwa = nazwy_tablica[index]

    console.log(obrazy_tablica);
}

const data = new Date();
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDay();

strToTime(year, month, day)