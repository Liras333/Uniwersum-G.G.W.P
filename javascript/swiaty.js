// POPUP

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const popup = document.querySelector(".popup")
const close_popup = document.querySelector(".close_popup")
const obraz_popup = document.querySelector('.obraz_popup');
const link_popup = document.querySelector(".link_popup");

img1.addEventListener("click", () => {
    popup.style.display = "flex";
    obraz_popup.src = img1.src;
    link_popup.href = img1.src;
})

if (img2 == null) {
} else {
    img2.addEventListener("click", () => {
        popup.style.display = "flex";
        obraz_popup.src = img2.src;
        link_popup.href = img2.src;
    })
}

// STRZAŁKI LEWO / PRAWO


function to_left(){
let images = document.querySelectorAll('.image-slider');

    images.forEach(obraz => {
        if (obraz.classList.contains('img1')) {
            obraz.classList.remove('img1');
            obraz.classList.add('img2');
        } else if (obraz.classList.contains('img2')) {
            obraz.classList.remove('img2');
            obraz.classList.add('img1');
        }
    })
}

function to_right(){
let images = document.querySelectorAll('.image-slider');

    images.forEach(obraz => {
        if (obraz.classList.contains('img1')) {
            obraz.classList.remove('img1');
            obraz.classList.add('img2');
        } else if (obraz.classList.contains('img2')) {
            obraz.classList.remove('img2');
            obraz.classList.add('img1');
        }
    })
}


// CLOSE PUPUP

close_popup.addEventListener("click", () => {
    popup.style.display = "none";
})


