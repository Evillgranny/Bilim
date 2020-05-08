export class ServicesSlider {
    constructor(slider, textSlider, textSlide) {
        this.slider = slider
        this.textSlider = textSlider
        this.textSlide = textSlide
    }

    sliderInit () {
        $(this.slider).slick({
            slidesToShow: 1,
            autoplay: true,
            dots: false,
            arrows: true,
            asNavFor: this.textSlider,
            prevArrow: '<button class="service-arr-prev"></button>',
            nextArrow: '<button class="service-arr-next"></button>',
            infinite: true,
            speed: 1500,
        })
    }

    textSliderInit () {
        this.colorForText()

        $(this.textSlider).slick({
            slidesToShow: 3,
            asNavFor: this.slider,
            autoplay: true,
            dots: false,
            arrows: false,
            infinite: true,
            variableWidth: true,
            speed: 1500,
            autoplaySpeed: 10000,
        })
    }

    colorForText () {
        $(this.textSlider).on('init afterChange', (event, slick, currentSlide) => {
            let activeSlidesArr = $(`${this.textSlider} .slick-active`),
                allSlides = $(`${this.textSlider} .slick-slide`)

            $(allSlides).find(this.textSlide).css({color: 'rgba(200, 200, 200, 0.1)'})
            $(activeSlidesArr[0]).find(this.textSlide).css({color: '#C8C8C8'})
            $(activeSlidesArr[1]).find(this.textSlide).css({color: 'rgba(200, 200, 200, 0.4)'})
        });
    }
}