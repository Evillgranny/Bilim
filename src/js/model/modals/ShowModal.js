export class ShowModal {
    constructor(btn, modal, section) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
        this.section = section
    }

    modalShow () {
        $(this.btn).on('click', () => {
            $(this.modal).animate({
                top: 0
            }, 700)
                .addClass('active')

            $(this.section).animate({
                'margin-top': '100vh'
            }, 700)

            $('html, body').addClass('blocked')
        })
    }
}