export class ShowModal {
    constructor(btn, modal) {
        this.btn = document.querySelector(btn)
        this.modal = document.querySelector(modal)
    }

    modalShow () {
        $(this.btn).on('click', () => {
            $(this.modal).animate({
                top: 0
            }, 700)
                .addClass('active')

            $('body, html').css({
                'width': '100vw',
                'height': '100vh',
                'overflow': 'hidden'
            })
        })
    }
}