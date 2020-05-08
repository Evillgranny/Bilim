export class ShowModal {
    constructor(btn, modal, section) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
        this.section = section
    }

    modalShow () {
        $(this.btn).on('click', () => {
            $(this.modal).addClass('open')

            $(this.section).addClass('open')

            setTimeout(function () {
                $('body, html').addClass('blocked')
            }, 700)

        })
    }
}