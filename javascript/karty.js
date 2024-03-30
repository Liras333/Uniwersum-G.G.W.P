const input2 = document.querySelector('input');

input2.addEventListener('input', szukaj_karte);

function szukaj_karte() {
    const searchText = input2.value.toLowerCase();
    const karty = document.querySelectorAll('.karty a');

    karty.forEach(karta => {
        const span = karta.querySelector("span")
        const nazwa_karty = span.textContent.toLowerCase();

        if (nazwa_karty.includes(searchText)) {
            karta.style.display = "block";
        } else {
            karta.style.display = "none";
        }
    })
}


function nacja() {
    const karty = document.querySelectorAll('.karty a');
    const nacja = document.querySelector('.nacja')

    karty.forEach(karta => {
        if (nacja.value == "Wszystkie") {
            karta.style.display = "block"
        }
        else if (nacja.value == "Vidatras") {
            if (karta.classList.contains('vidatras')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Sanowar") {
            if (karta.classList.contains("sanowar")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Ether") {
            if (karta.classList.contains('ether')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "swiat_nieumarlych") {
            console.log(nacja.value)
            if (karta.classList.contains("swiat_nieumarlych")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Neutralne") {
            if (karta.classList.contains('neutralne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
    })

}

function rzadkosc() {
    const karty = document.querySelectorAll('.karty a');
    const rzadkosc = document.querySelector('.rzadkosc')

    karty.forEach(karta => {
        if (rzadkosc.value == "dowodca") {
            if (karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
    })
}