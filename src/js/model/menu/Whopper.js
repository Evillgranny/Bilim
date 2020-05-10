import { MobileDetect} from "../mobileDetect/MobileDetect";

export class Menu {
    constructor (btn, menu, section) {
        this.btn = btn
        this.menu = menu
        this.section = section
        this.detect = new MobileDetect()
    }

    openMenu () {
        $(this.section).addClass('open')

        $(this.menu).addClass('open')

        $(this.btn).addClass('active')

        if (this.detect.detect()) {
            setTimeout(function () {
                $('body, html').addClass('blocked')
            }, 700)
        }
    }

    closeMenu () {
        $(this.menu).removeClass('open')

        $(this.section).removeClass('open')

        $(this.btn).removeClass('active')

        if (this.detect.detect()) {
            setTimeout(function () {
                $('body, html').removeClass('blocked')
            }, 700)
        }
    }
}
