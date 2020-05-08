export class CloseModal {
    constructor(btn, modal, section) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
        this.section = section
    }

    modalClose () {
        $(this.btn).on('click', () => {
            $(this.modal).removeClass('open')

            $(this.section).removeClass('open')

            setTimeout(function () {
                $('body, html').removeClass('blocked')
            }, 700)
        })
    }
}