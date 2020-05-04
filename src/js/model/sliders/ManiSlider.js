export class ManiSlider {
    constructor(slide, slideFront, bigText, textArr, shadowArr) {
        this.slidesArr = document.querySelectorAll(slide)
        this.slidesInArr = document.querySelectorAll(slideFront)
        this.bigTextArr = document.querySelectorAll(bigText)
        this.shadowArr = document.querySelectorAll(shadowArr)
        this.counter = 0

        $(this.slidesArr[0]).css('opacity', '1')
        $(this.slidesInArr[0]).css('opacity', '1')
        $(this.shadowArr[0]).css('opacity', '1')
        $(this.bigTextArr[0]).addClass('active')
    }

    newSlide () {
        $(this.slidesArr[this.counter]).removeClass('active')
            .animate({opacity: 0}, 3000)
        $(this.slidesInArr[this.counter]).animate({opacity: 0}, 3000)
        $(this.shadowArr[[this.counter]]).animate({opacity: 0}, 3000)
        $(this.bigTextArr[this.counter]).removeClass('active').addClass('remove')
        let currentBigText = this.bigTextArr[this.counter]

        setTimeout(function () {
            $(currentBigText).removeClass('remove')
        }, 1750)

        this.counter++

        if (this.counter === this.slidesArr.length)
            this.counter = 0

        $(this.slidesArr[this.counter]).addClass('active')
            .animate({opacity: 1}, 3000)
        $(this.slidesInArr[this.counter]).animate({opacity: 1}, 3000)
        $(this.shadowArr[[this.counter]]).animate({opacity: 1}, 3000)
        $(this.bigTextArr[this.counter]).addClass('active')
    }
}