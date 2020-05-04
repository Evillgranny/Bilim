import $ from 'jquery'
import popper from "popper.js"
import 'slick-carousel'

import { menu } from './controller/menu/whopperC'
import { parallax } from './controller/paralax/parallaxC'
import { slider } from './controller/sliders/mainSliderC'
import { scroll } from "./controller/scroll/mainScrollC";
// import { running } from "./controller/runningLineC";
import { servicesSlider } from "./controller/sliders/servicesSliderC";
import { defSlider } from "./controller/sliders/defaultSliderC"
import { inputs } from "./controller/inputs/inputFocusC"
import { showModal } from "./controller/modal/showModalC"
import { closeModal } from "./controller/modal/closeModalC"
// import { q } from  './controller/decayC'

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//
//     alert("Вы используете мобильное устройство (телефон или планшет).")
//
// } else alert("Вы используете ПК.")