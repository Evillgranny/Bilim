export class CloseModal {
    constructor(btn, modal, section) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
        this.section = section
    }

    modalClose () {
        $(this.btn).on('click', () => {
            $(this.modal).animate({
                top: '-100vh'
            }, 700)
                .removeClass('active')

            $(this.section).animate({
                'margin-top': '0'
            }, 700)

            $('html, body').removeClass('blocked')
        })
    }
}