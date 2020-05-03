export class CloseModal {
    constructor(btn, modal) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
    }

    modalClose () {
        $(this.btn).on('click', () => {
            $(this.modal).animate({
                top: '-100vh'
            }, 700)
                .removeClass('active')

            $('body, html').css({
                'width': 'auto',
                'height': 'auto',
                'overflow': 'auto'
            })
        })
    }
}