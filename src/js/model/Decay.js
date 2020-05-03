export class Decay {
    constructor(el) {
        this.loading = $(el).wrapInner('<div></div>'),
            this.min = 20,
            this.max = 70,
            this.minMove = 10,
            this.maxMove = 20;

        this.startAnimation(this.loading);

        this.loading.on('animationend webkitAnimationEnd oAnimationEnd', 'span:last-child', e => {
            this.startAnimation(this.loading);
        });
    }

    setCSSVars (elem, min, max, minMove, maxMove) {
        let width = Math.ceil(elem.width()),
            text = elem.text();
        for(let i = 1; i < width; i++) {
            let num = Math.floor(Math.random() * (max - min + 1)) + min,
                numMove = Math.floor(Math.random() * (maxMove - minMove + 1)) + minMove,
                dir = (i % 2 == 0) ? 1 : -1,
                spanCurrent = elem.find('span:eq(' + i + ')'),
                span = spanCurrent.length ? spanCurrent : $('<span />');
            span.css({
                '--x': i - 1 + 'px',
                '--move-y': num * dir + 'px',
                '--move-y-s': ((i % 2 == 0) ? num * dir - numMove : num * dir + numMove) + 'px',
                '--delay': i * 10 + 'ms'
            });
            if(!spanCurrent.length) {
                elem.append(span.text(text));
            }
        }
    }

    startAnimation (elem) {
        elem.removeClass('start');
        this.setCSSVars(elem, this.min, this.max, this.minMove, this.maxMove);
        void elem[0].offsetWidth;
        elem.addClass('start');
    }
}

