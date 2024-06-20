const to_left = document.querySelector('.to-left');
const to_right = document.querySelector('.to-right');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

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