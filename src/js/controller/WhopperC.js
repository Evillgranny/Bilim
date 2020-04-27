import { Menu } from "../model/Whopper";

export let menu = new Menu('.whopper', '#menu', '#app')

$('.whopper').on('click', function () {
    if ($(this).hasClass('active'))
        menu.closeMenu()
    else
        menu.openMenu()
})

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27)
        menu.closeMenu()
})



