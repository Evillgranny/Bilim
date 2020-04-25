export class Menu {
    constructor (btn, menu, section) {
        this.btn = btn
        this.menu = menu
        this.section = section
    }

    openMenu () {
        $(this.btn).on('click', () => {
            if (!$(this.btn).hasClass('active')) {

                $(this.menu).animate({
                    'margin-top': '0'
                }, 700)

                $(this.section).animate({
                    'margin-top': '100vh'
                }, 700)

                $(this.btn).addClass('active')


            } else {

                $(this.menu).animate({
                    'margin-top': '-100vh'
                }, 700)

                $(this.section).animate({
                    'margin-top': '0'
                }, 700)

                $(this.btn).removeClass('active')

            }
        })
    }
}
