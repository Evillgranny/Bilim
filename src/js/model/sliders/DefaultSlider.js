export class DefaultSlider {
    constructor(slider) {
        this.slider = slider
    }

    sliderInit () {
        $(this.slider).slick({
            slidesToShow: 3,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 10000,
            dots: false,
            arrows: true,
            prevArrow: '<button class="default-slider-prev"></button>',
            nextArrow: '<button class="default-slider-next"></button>',
            infinite: true,
            centerMode: true,
            variableWidth: true,
            centerPadding: '50px',
            useTransform: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: '25px',
                    }
                }
            ]
        })
    }
}