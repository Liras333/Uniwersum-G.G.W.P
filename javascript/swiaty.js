const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const popup = document.querySelector(".popup")
const close_popup = document.querySelector(".close_popup")
const obraz_popup = document.querySelector('.obraz_popup');

console.log(obraz_popup)

img1.addEventListener("click", () => {
    popup.style.display = "flex";
    obraz_popup.src = img1.src;
})

if (img2 == null) {
    console.log("a")
} else {
    img2.addEventListener("click", () => {
        popup.style.display = "flex";
        obraz_popup.src = img2.src;
    })
}



close_popup.addEventListener("click", () => {
    popup.style.display = "none";
})




const to_left = document.querySelector('.to-left');
const to_right = document.querySelector('.to-right');
let images = document.querySelectorAll('.image-slider');

to_left.addEventListener('click', () => {
    images.forEach(obraz => {
        if (obraz.classList.contains('img1')) {
            obraz.classList.remove('img1');
            obraz.classList.add('img2');
        } else if (obraz.classList.contains('img2')) {
            obraz.classList.remove('img2');
            obraz.classList.add('img1');
        }
    })

})

to_right.addEventListener('click', () => {
    images.forEach(obraz => {
        if (obraz.classList.contains('img1')) {
            obraz.classList.remove('img1');
            obraz.classList.add('img2');
        } else if (obraz.classList.contains('img2')) {
            obraz.classList.remove('img2');
            obraz.classList.add('img1');
        }
    })

})




