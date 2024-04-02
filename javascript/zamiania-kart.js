

function zmien_karte() {
    const karty = document.querySelectorAll('section .karta');
    const specyfikacje = document.querySelectorAll('section .specyfikacja');

    karty.forEach(karta => {
        if (karta.classList.contains("karta1")) {
            karta.classList.remove("karta1");
            karta.classList.add("karta2");
        } else if (karta.classList.contains("karta2")) {
            karta.classList.remove("karta2");
            karta.classList.add("karta1");
        }
    })

    specyfikacje.forEach(specyfikacja => {
        if (specyfikacja.classList.contains("specyfikacja1")) {
            specyfikacja.classList.remove("specyfikacja1");
            specyfikacja.classList.add("specyfikacja2");
        } else if (specyfikacja.classList.contains("specyfikacja2")) {
            specyfikacja.classList.remove("specyfikacja2");
            specyfikacja.classList.add("specyfikacja1");

        }
    })
}