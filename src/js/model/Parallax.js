export class Parallax {
    constructor(block, parallaxBlock) {
        this.block = block
        this.parallaxBlock = parallaxBlock
        this.width = $(this.block).width()
        this.height = $(this.block).height()
        this.centerW = $(this.block).width() / 2
        this.centerH = $(this.block).height() / 2
    }

    startParallax () {
        $(this.block).mousemove( (e) => {
            let mouseX = e.clientX - this.centerW,
                mouseY = e.clientY - this.centerH


            if (this.width < 1921 && this.width > 1600)
                $(this.parallaxBlock).css({
                    'background-position': `${(((1920  - this.width) / 2 * (-1)) + (mouseX / 20 * (-1)))}px ${(((940  - this.height) / 2 * (-1)) + (mouseY / 20 * (-1)))}px`,
                })
            if (this.width <= 1600 && this.width > 1300)
                $(this.parallaxBlock).css({
                    'background-position': `${(((1600  - this.width) / 2 * (-1)) + (mouseX / 20 * (-1)))}px ${(((940  - this.height) / 2 * (-1)) + (mouseY / 20 * (-1)))}px`,
                })
            if (this.width <= 1300 && this.width > 1024)
                $(this.parallaxBlock).css({
                    'background-position': `${(((1300  - this.width) / 2 * (-1)) + (mouseX / 20 * (-1)))}px ${(((940  - this.height) / 2 * (-1)) + (mouseY / 20 * (-1)))}px`,
                })
        })
    }
}