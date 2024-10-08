
//wyszukwoarka postaci
const input = document.querySelector('input');
input.addEventListener('input', search)

function search() {
    const searchText = input.value.toLowerCase();
    const postacie = document.querySelectorAll('.link-postac');
    postacie.forEach(postac => {

        const tagi = postac.querySelectorAll(".tagi .tag");
        const p = postac.querySelector('.opis-postaci .nazwa');
        const headerText = p.textContent.toLowerCase();


        if (headerText.includes(searchText)) {
            postac.style.display = "block";
        } else {
            postac.style.display = "none";
        }

        tagi.forEach(tag => {
            const tagE = tag.textContent.toLowerCase();
            if (tagE.includes(searchText)) {
                postac.style.display = "block";
            }
        })


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
        if (postacie[0].text.indexOf('Bülgerbass - Postrach Shekki') != -1) {
            postacie.reverse();
            console.log(postacie);
            container.innerHTML = "";

            postacie.forEach(postac => {
                container.appendChild(postac)
            })
        }
    }
}