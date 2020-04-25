import Typed from 'typed.js';

export class ManiSlider {
    constructor(slide, slideFront, bigText, textArr, shadowArr) {
        this.slidesArr = document.querySelectorAll(slide)
        this.slidesInArr = document.querySelectorAll(slideFront)
        this.bigText = document.querySelector(bigText)
        this.shadowArr = document.querySelectorAll(shadowArr)
        this.textArr = textArr
        this.counter = 0

        console.log(this.shadowArr)
        $(this.slidesArr[0]).css('opacity', '1')
        $(this.slidesInArr[0]).css('opacity', '1')
        $(this.shadowArr[0]).css('opacity', '1')

        let typed = new Typed(this.bigText , {
            strings: ["", this.textArr[0]],
            typeSpeed: 40,
            loopCount: 1,
            showCursor: false
        });

        setInterval(() => {
            this.newSlide()
        }, 5000)
    }

    newSlide () {
        $(this.slidesArr[this.counter]).removeClass('active')
            .animate({opacity: 0}, 3000)
        $(this.slidesInArr[this.counter]).animate({opacity: 0}, 3000)
        $(this.shadowArr[[this.counter]]).animate({opacity: 0}, 3000)
        console.log(this.shadowArr[this.counter])
        this.counter++

        if (this.counter === this.slidesArr.length)
            this.counter = 0

        let currentArrStr = this.textArr[this.counter]

        let typed = new Typed(this.bigText , {
            strings: ["", currentArrStr],
            typeSpeed: 40,
            backSpeed: 40,
            startDelay: 600,
            loopCount: 1,
            showCursor: false
        });

        $(this.slidesArr[this.counter]).addClass('active')
            .animate({opacity: 1}, 3000)
        $(this.slidesInArr[this.counter]).animate({opacity: 1}, 3000)
        $(this.shadowArr[[this.counter]]).animate({opacity: 1}, 3000)
    }
}