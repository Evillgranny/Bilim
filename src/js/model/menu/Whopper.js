export class Menu {
    constructor (btn, menu, section) {
        this.btn = btn
        this.menu = menu
        this.section = section
    }

    openMenu () {
        $(this.menu).animate({
            'margin-top': '0'
        }, 700)

        $(this.section).animate({
            'margin-top': '100vh'
        }, 700)

        $(this.btn).addClass('active')

        $('html, body').addClass('blocked')
    }

    closeMenu () {
        $(this.menu).animate({
            'margin-top': '-100vh'
        }, 700)

        $(this.section).animate({
            'margin-top': '0'
        }, 700)

        $(this.btn).removeClass('active')

        $('html, body').removeClass('blocked')
    }
}
