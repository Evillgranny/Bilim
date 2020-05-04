export class MainScroll {
    constructor(section, dotsContainer, dotClass) {
        this.sectionsArr = document.querySelectorAll(section)
        this.counter = 0
        this.dotsContainer = dotsContainer
        this.dotsArr = ''
        this.addDots(dotClass)
        this.firstScene = this.sectionsArr[0]
        this.maxCounter = (this.sectionsArr.length - 1) * (-1)
        $(this.sectionsArr[0]).addClass('selected')
    }

    moveScene (e) {
        if (e.deltaY < 0 && !$(this.firstScene).hasClass('active') && this.counter !== 0) {
            this.keyUp(e)
        }
        else if (e.deltaY > 0 && !$(this.firstScene).hasClass('active') && this.counter !== this.maxCounter) {
            this.keyDown(e)
        }
    }

    keyDown () {
        if (!$(this.firstScene).hasClass('active') && this.counter !== this.maxCounter) {
            $(this.sectionsArr).css({height: '100vh'})
            $('#app').css({height: '100vh'})


            $(this.firstScene).addClass('active')

            this.counter--

            $(this.sectionsArr).removeClass('selected')
            this.sectionsArr[this.counter * (-1)].classList.add('selected')

            $(this.firstScene).animate({
                marginTop: `${this.counter * 100}vh`
            }, 1000)

            $('html, body').animate({
                scrollTop: '100vh'
            })

            $(this.dotsArr).removeClass('selected')
            $(this.dotsArr[this.counter * (-1)] ).addClass('selected')

            setTimeout(() => {
                $(this.firstScene).removeClass('active')
            },1000)
        }
    }

    keyUp () {
        if (!$(this.firstScene).hasClass('active') && this.counter !== 0) {
            $(this.sectionsArr).css({height: '100vh'})
            $('#app').css({height: '100vh'})

            $(this.firstScene).addClass('active')

            this.counter++

            $(this.sectionsArr).removeClass('selected')
            $(this.sectionsArr[this.counter]).addClass('selected')

            $(this.firstScene).animate({
                marginTop: `${this.counter * 100}vh`
            }, 1000)

            $(this.dotsArr).removeClass('selected')
            $(this.dotsArr[this.counter * (-1)]).addClass('selected')


            setTimeout(() => {
                $(this.firstScene).removeClass('active')
            },1000)
        }
    }

    addDots (dotClass) {
        for (let i = 0; i < this.sectionsArr.length; i++) {
            let elem = document.createElement('li')
            elem.classList.add(dotClass)
            elem.onclick = () => {
                if (!$(this.firstScene).hasClass('active')) {
                    $(this.firstScene).addClass('active')

                    this.counter = i * (-1)

                    $(this.firstScene).animate({
                        marginTop: `${this.counter * 100}vh`
                    }, 1000)

                    $(this.dotsArr).removeClass('selected')
                    $(this.dotsArr[this.counter * (-1)] ).addClass('selected')

                    setTimeout(() => {
                        $(this.firstScene).removeClass('active')
                    },1000)
                }
            }

            if (i === 0)
                elem.classList.add('selected')

            $(this.dotsContainer).append(elem)
        }
        this.dotsArr = document.querySelectorAll('.' + dotClass)
    }
}