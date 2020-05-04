

export class RunningLine {
    constructor(block) {
        this.runningBlock = document.querySelector(block)
    }

    startRunningLine () {
        $(this.runningBlock).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'linear',
            delayTime: 0,
            dots: false,
            arrows: false
        })
    }
}
