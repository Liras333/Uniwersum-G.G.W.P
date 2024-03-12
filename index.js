window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.info');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 120;

        if (revealtop < windowHeight - revealpoint) {
            reveals[i].classList.add('info-active')
        }
    }
}


