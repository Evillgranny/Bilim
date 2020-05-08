import { MainScroll } from "../../model/scroll/MainScroll"
import { MobileDetect} from "../../model/mobileDetect/MobileDetect";

export let scroll = new MainScroll('.section', '.dots-list', 'dot')
let detection = new MobileDetect()
if (detection.detect()) {
    $('#app, .section, .scroll-container, .dots').addClass('mobile')
    scroll = false
} else {
    document.onwheel = (e) => {
        if (!$('.whopper').hasClass('active') && !$('.contacts-form').hasClass('active'))
            scroll.moveScene(e)
    }

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 40 && !$('.whopper').hasClass('active') && !$('.contacts-form').hasClass('active'))
            scroll.keyDown()
    })

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 38 && !$('.whopper').hasClass('active') && !$('.contacts-form').hasClass('active'))
            scroll.keyUp()
    })

    let start,
        end

    document.addEventListener('touchstart', function (e) {
        if (!$('.whopper').hasClass('active') && !$('.contacts-form').hasClass('active'))
            start = e.changedTouches[0].screenY
    }, false)


    document.addEventListener('touchend', function (e) {
        if (!$('.whopper').hasClass('active') && !$('.contacts-form').hasClass('active')) {
            end = e.changedTouches[0].screenY
            if (Math.abs(start - end) > 100)
                if (start < end) {
                    scroll.keyUp()
                } else {
                    scroll.keyDown()
                }
        }
    }, false)
}


