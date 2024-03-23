const input = document.querySelector('input');
input.addEventListener('input', search)

function search() {
    const searchText = input.value.toLowerCase();
    const postacie = document.querySelectorAll('.link-postac');
    postacie.forEach(postac => {
        const p = postac.querySelector('.opis-postaci .nazwa');

        if (p) {
            const headerText = p.textContent.toLowerCase();

            if (headerText.includes(searchText)) {
                postac.style.display = "block"
            } else {
                postac.style.display = "none";
            }
        }
    })
}

//sortowanie


function sortuj() {
    const select = document.querySelector('select');
    const container = document.querySelector('.container2');
    postacie = Array.from(container.children);
    console.log(select.value)

    if (select.value == 'old') {

        postacie.reverse();
        console.log(postacie);
        container.innerHTML = "";

        postacie.forEach(postac => {
            container.appendChild(postac)
        })
    } else if (select.value == 'new') {
        if (postacie[0].text.indexOf('Nooga') != -1) {
            postacie.reverse();
            console.log(postacie);
            container.innerHTML = "";

            postacie.forEach(postac => {
                container.appendChild(postac)
            })
        }
    }
}

//back to up

document.addEventListener('scroll', scrolls);

function scrolls() {

    if (scrollY >= 400) {
        if (innerWidth <= 1000) {
            document.querySelector('.back-to-top').style.display = "none"
        } else {
            document.querySelector('.back-to-top').style.display = "block"
        }

    }
    else {
        document.querySelector('.back-to-top').style.display = "none"
    }
}

