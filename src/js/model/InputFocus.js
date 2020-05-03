export class inputFocus {
    constructor(inputs) {
        this.inputs = document.querySelectorAll(inputs)
    }

    focusOnInput () {
        $(this.inputs).on('focus', function () {
            $(this).addClass('active')
        })

        $(this.inputs).on('focusout', function () {
            if ($(this).val().length === 0) {
                $(this).removeClass('active')
            }
        })
    }
}