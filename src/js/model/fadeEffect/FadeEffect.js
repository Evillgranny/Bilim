export class FadeEffect {
    constructor  (fadeBlock) {
        this.allBlocks = document.querySelectorAll(fadeBlock)
        this.allBlocks.forEach(i => {
            $(window).scroll(() => {
                $(i).offset().top - $(window).scrollTop() < 400 ? $(i).addClass('show') : $(i).removeClass('show')
            })
        })
    }
}