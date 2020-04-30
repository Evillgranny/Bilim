import { ServicesSlider } from "../model/ServicesSlider"

export let servicesSlider = new ServicesSlider('.service-slider', '.text-slider', '.text-slider-item')

servicesSlider.sliderInit()
servicesSlider.textSliderInit()