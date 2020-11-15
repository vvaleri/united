//menu burger

const burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.header__menu')


function openMenu() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')

    if(menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

burger.addEventListener('click', openMenu)