// dom ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('dom ready')
    let scrambleBtn = document.querySelector('.button')
    let scrambleText = document.querySelector('.textarea')
    let output = document.querySelector('.output')
    scrambleBtn.addEventListener('click', function (event) {
        scrambler(scrambleText, output)
    })
})
// window resize
window.addEventListener('resize', function () {
    console.log('window resized')
})

const scrambler = function (element, output) {
    if (element.value) {
        TweenMax.to(
            output,
            2,
            {
                scrambleText: {
                    text: element.value,
                    chars: '01',
                    revealDelay: 1,
                    oldClass: 'has-text-black',
                    newClass: 'has-text-danger',
                    // speed: .01,
                    rightToLeft: false,
                    ease: Elastic.easeOut
                }
            }
        )
    }
}