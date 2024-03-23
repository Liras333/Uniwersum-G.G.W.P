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

function menu_click() {
    const menu_on = document.querySelector('.menu-img');
    const header_mobile = document.querySelector('.header-mobile');
    header_mobile.animate([
        {
            transform: 'translateX(100%)',
            opacity: '0'
        },
        {
            transform: 'translateX(0)',
            opacity: '1'
        }
    ], {
        duration: 100,
    });

    menu_on.style.display = "none";
    header_mobile.style.display = "block";
}

function menu_click2() {
    const menu_off = document.querySelector('.close-img');
    const menu_on = document.querySelector('.menu-img');
    const header_mobile = document.querySelector('.header-mobile');
    header_mobile.animate([
        {
            transform: 'translateX(0)',
            opacity: '1'
        },
        {
            transform: 'translateX(100%)',
            opacity: '1'
        }
    ], {
        duration: 100,
    });

    setTimeout(function () {
        menu_on.style.display = "block";
        header_mobile.style.display = "none";
    }, 80)
}


