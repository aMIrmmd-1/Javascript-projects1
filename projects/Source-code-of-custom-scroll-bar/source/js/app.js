let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY
    let height = document.body.clientHeight
    let windowHeight = window.innerHeight   
    let percent = scrollTop / (height - windowHeight)
    let rounded = Math.round(percent * 100)
    customScroll.style.width = rounded + '%'
})