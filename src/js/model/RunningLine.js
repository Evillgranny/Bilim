import 'slick-carousel'

export class RunningLine {
    constructor(block, text, className) {
        this.runningBlock = document.querySelector(block)

    }

    startRunningLine () {
        $(this.runningBlock).slick({
            slidesToShow: 1, // толкьо 1 слайд показывать одновременно
            slidesToScroll: 1, // по 1-му слайду проскролливать
            speed: 4000, // медленная смена слайдов - скорость бегущей строки
            autoplay: true, // устанавливаем автозапуск слайдера
            autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
            cssEase: 'linear', // делаем анимацию однотонной при смене слайда,
            delayTime: 0,
            dots: false,
            arrows: false
        })
    }
}
