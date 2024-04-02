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


function filter() {
    const karty = document.querySelectorAll('.karty a');
    const nacja = document.querySelector('.nacja')
    const rzadkosc = document.querySelector('.rzadkosc')
    const typ = document.querySelector('.typ')

    karty.forEach(karta => {

        //?VIDATRAS
        if (nacja.value == "Vidatras" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && typ.value == "jednostka") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && typ.value == "dzialanie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && typ.value == "zaklecie") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && typ.value == "budynek") {
            if (karta.classList.contains("vidatras") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "dowodca") {
            if (karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "dowodca") {
            if (karta.classList.contains('vidatras') && karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "legendarne") {
            if (karta.classList.contains('vidatras') && karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('vidatras') && karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras" && rzadkosc.value == "zwykle") {
            if (karta.classList.contains('vidatras') && karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Vidatras") {
            if (karta.classList.contains('vidatras')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        //! SANOWAR

        else if (nacja.value == "Sanowar" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && typ.value == "jednostka") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        else if (nacja.value == "Sanowar" && typ.value == "dzialanie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        else if (nacja.value == "Sanowar" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && typ.value == "zaklecie") {
            if (karta.classList.contains("sanowars") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && typ.value == "budynek") {
            if (karta.classList.contains("sanowar") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "dowodca") {
            if (karta.classList.contains('sanowar') && karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "legendarne") {
            if (karta.classList.contains('sanowar') && karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('sanowar') && karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar" && rzadkosc.value == "zwykle") {
            if (karta.classList.contains('sanowar') && karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Sanowar") {
            if (karta.classList.contains("sanowar")) {

                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        //* ETHER

        else if (nacja.value == "Ether" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("ethet") && karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("ether") && karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("ether") && karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("ether") && karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && typ.value == "jednostka") {
            if (karta.classList.contains("ether") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("ethet") && karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("ether") && karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("ether") && karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("ether") && karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && typ.value == "dzialanie") {
            if (karta.classList.contains("ether") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("ethet") && karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("ether") && karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("ether") && karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("ether") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && typ.value == "zaklecie") {
            if (karta.classList.contains("ether") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("ethet") && karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("ether") && karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("ether") && karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("ether") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && typ.value == "budynek") {
            if (karta.classList.contains("ether") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        else if (nacja.value == "Ether" && rzadkosc.value == "dowodca") {
            if (karta.classList.contains('ether') && karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "legendarne") {
            if (karta.classList.contains('ether') && karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('ether') && karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether" && rzadkosc.value == "zwykle") {
            if (karta.classList.contains('ether') && karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Ether") {
            if (karta.classList.contains('ether')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }

        // SWIAT NIEUMARLYCH

        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && typ.value == "jednostka") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && typ.value == "dzialanie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && typ.value == "zaklecie") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && typ.value == "budynek") {
            if (karta.classList.contains("swiat_nieumarlych") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "dowodca") {
            if (karta.classList.contains('swiat_nieumarlych') && karta.classList.contains('dowodca')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "legendarne") {
            if (karta.classList.contains('swiat_nieumarlych') && karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('swiat_nieumarlych') && karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych" && rzadkosc.value == "zwykle") {
            if (karta.classList.contains('swiat_nieumarlych') && karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Swiat_nieumarlych") {
            console.log(nacja.value)
            if (karta.classList.contains("swiat_nieumarlych")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }

        //TODO NEUTRALNE

        else if (nacja.value == "Neutralne" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && typ.value == "dzialanie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && typ.value == "zaklecie") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && typ.value == "budynek") {
            if (karta.classList.contains("neutralne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "legendarne") {
            if (karta.classList.contains('neutralne') && karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('neutralne') && karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne" && rzadkosc.value == "zwykle") {
            if (karta.classList.contains('neutralne') && karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (nacja.value == "Neutralne") {
            if (karta.classList.contains('neutralne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (nacja.value == "Wszystkie" && rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "dowodca" && typ.value == "jednostka") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "legendarne" && typ.value == "jednostka") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "rzadkie" && typ.value == "jednostka") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "zwykle" && typ.value == "jednostka") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("jednostka")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "dowodca" && typ.value == "dzialanie") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "legendarne" && typ.value == "dzialanie") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "rzadkie" && typ.value == "dzialanie") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "zwykle" && typ.value == "dzialanie") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("dzialanie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "dowodca" && typ.value == "zaklecie") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "legendarne" && typ.value == "zaklecie") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "rzadkie" && typ.value == "zaklecie") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "zwykle" && typ.value == "zaklecie") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("zaklecie")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "dowodca" && typ.value == "budynek") {
            if (karta.classList.contains("dowodca") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "legendarne" && typ.value == "budynek") {
            if (karta.classList.contains("legendarne") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "rzadkie" && typ.value == "budynek") {
            if (karta.classList.contains("rzadkie") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }
        else if (rzadkosc.value == "zwykle" && typ.value == "budynek") {
            if (karta.classList.contains("zwykle") && karta.classList.contains("budynek")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none'
            }
        }



        else if (rzadkosc.value == "dowodca") {
            if (karta.classList.contains("dowodca")) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (rzadkosc.value == "legendarne") {
            if (karta.classList.contains('legendarne')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (rzadkosc.value == "rzadkie") {
            if (karta.classList.contains('rzadkie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (rzadkosc.value == "zwykle") {
            if (karta.classList.contains('zwykle')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (typ.value == "jednostka") {
            if (karta.classList.contains('jednostka')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (typ.value == "dzialanie") {
            if (karta.classList.contains('dzialanie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (typ.value == "zaklecie") {
            if (karta.classList.contains('zaklecie')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }
        else if (typ.value == "budynek") {
            if (karta.classList.contains('budynek')) {
                karta.style.display = "block";
            } else {
                karta.style.display = 'none';
            }
        }


        else if (nacja.value == "Wszystkie" || "wybierz nacje" || "Wybierz rzadkosc" || "wybierz typ") {
            karta.style.display = "block"
        }

    })

}

