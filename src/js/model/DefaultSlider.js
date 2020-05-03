export class DefaultSlider {
    constructor(slider) {
        this.slider = slider
    }

    sliderInit () {
        $(this.slider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1500,
            dots: false,
            arrows: true,
            prevArrow: '<button class="default-slider-prev"></button>',
            nextArrow: '<button class="default-slider-next"></button>',
            infinite: false,
            centerMode: true,
            variableWidth: true,
            centerPadding: '50px',
            swipe: false,
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