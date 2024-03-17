const input = document.querySelector('input');
input.addEventListener('input', search)

function search(){
    const searchText = input.value.toLowerCase();
    const postacie = document.querySelectorAll('.link-postac');
    postacie.forEach(postac => {
        const h2 = postac.querySelector('.nazwa');

        if(h2) {
            const headerText = postac.textContent.toLowerCase();

            if(headerText.includes(searchText)) {
                postac.style.display = "block"
            }else{
                postac.style.display = "none";
            }
        }
    })
}