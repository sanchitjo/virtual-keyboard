let audioRow1 = new Audio('sounds/mixkit-single-key-type-2533.wav')
let buttonsRow1 = document.getElementsByClassName('key1')
for (let i = 0; i < buttonsRow1.length; i++) {
    buttonsRow1[i].addEventListener('click', soundplayer1)
    function soundplayer1() {
        audioRow1.playbackRate = 3
        audioRow1.play()
    }
}

let audioRow2 = new Audio('sounds/mixkit-short-guitar-riff-2322.wav')
let buttonsRow2 = document.getElementsByClassName('key2')
for (let i = 0; i < buttonsRow2.length; i++) {
    buttonsRow2[i].addEventListener('click', soundplayer2)
    function soundplayer2() {
        audioRow2.playbackRate = 3
        audioRow2.play()
    }
}

let audioRow3 = new Audio('sounds/mixkit-message-pop-alert-2354.mp3')
let buttonsRow3 = document.getElementsByClassName('key3')
for (let i = 0; i < buttonsRow3.length; i++) {
    buttonsRow3[i].addEventListener('click', soundplayer3)
    function soundplayer3() {
        audioRow3.playbackRate = 3
        audioRow3.play()
    }
}

let audioRow4 = new Audio('sounds/mixkit-fast-air-sweep-transition-168.wav')
let buttonsRow4 = document.getElementsByClassName('key4')
for (let i = 0; i < buttonsRow4.length; i++) {
    buttonsRow4[i].addEventListener('click', soundplayer4)
    function soundplayer4() {
        audioRow4.playbackRate = 3
        audioRow4.play()
    }
}

let audioRow5 = new Audio('sounds/mixkit-happy-guitar-chords-2319.wav')
let buttonsRow5 = document.getElementsByClassName('key5')
for (let i = 0; i < buttonsRow5.length; i++) {
    buttonsRow5[i].addEventListener('click', soundplayer5)
    function soundplayer5() {
        audioRow5.playbackRate = 3
        audioRow5.play()
    }
}

let audioRow6 = new Audio('sounds/mixkit-losing-bleeps-2026.wav')
let buttonsRow6 = document.getElementsByClassName('key6')
for (let i = 0; i < buttonsRow6.length; i++) {
    buttonsRow6[i].addEventListener('click', soundplayer6)
    function soundplayer6() {
        audioRow6.playbackRate = 3
        audioRow6.play()
    }
}