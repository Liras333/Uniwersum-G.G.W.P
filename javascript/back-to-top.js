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
