import { MainScroll } from "../model/MainScroll"

export let scroll = new MainScroll('.section', '.dots-list', 'dot')

document.onwheel = (e) => {
    scroll.moveScene(e)
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 40)
        scroll.keyDown()
})

document.addEventListener("keydown", (e) => {
    if (e.keyCode === 38)
        scroll.keyUp()
})
