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