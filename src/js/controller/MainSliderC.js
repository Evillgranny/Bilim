import {ManiSlider} from "../model/ManiSlider";

let textArr = ['BRANDING.', 'DIGITAL.', 'PR.', 'Marketing.', 'EVENT.']

export let slider = new ManiSlider('.main-slide', '.bilim','.main-big-text', textArr, '.bilim-back')

setInterval(() => {
    if ($('.main').hasClass('selected'))
        slider.newSlide()
}, 5000)

