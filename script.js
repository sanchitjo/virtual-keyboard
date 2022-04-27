// let audioRow1 = new Audio('sounds/mixkit-single-key-type-2533.wav')
// let buttonsRow1 = document.getElementsByClassName('key1')
// for (let i = 0; i < buttonsRow1.length; i++) {
//     buttonsRow1[i].addEventListener('click', soundplayer)
//     function soundplayer() {
//         audioRow1.playbackRate = 3
//         audioRow1.play()
//     }
// }

// let audioRow2 = new Audio('sounds/mixkit-short-guitar-riff-2322.wav')
// let buttonsRow2 = document.getElementsByClassName('key2')
// for (let i = 0; i < buttonsRow2.length; i++) {
//     buttonsRow2[i].addEventListener('click', soundplayer)
//     function soundplayer() {
//         audioRow2.play()

//     }
// }

// let audioRow3 = new Audio('sounds/mixkit-message-pop-alert-2354.mp3')
// let buttonsRow3 = document.getElementsByClassName('key3')
// for (let i = 0; i < buttonsRow3.length; i++) {
//     buttonsRow3[i].addEventListener('click', soundplayer)
//     function soundplayer() {
//         audioRow3.playbackRate = 3
//         audioRow3.play()
//     }
// }

// let audioRow4 = new Audio('sounds/mixkit-fast-air-sweep-transition-168.wav')
// let buttonsRow4 = document.getElementsByClassName('key4')
// for (let i = 0; i < buttonsRow4.length; i++) {
//     buttonsRow4[i].addEventListener('click', soundplayer)
//     function soundplayer() {
//         audioRow4.playbackRate = 3
//         audioRow4.play()
//     }
// }

// let audioRow5 = new Audio('sounds/mixkit-happy-guitar-chords-2319.wav')
// let buttonsRow5 = document.getElementsByClassName('key5')
// for (let i = 0; i < buttonsRow5.length; i++) {
//     buttonsRow5[i].addEventListener('click', soundplayer)
//     function soundplayer() {
//         audioRow5.playbackRate = 3
//         audioRow5.play()
//     }
// }

// let audioRow6 = new Audio('sounds/mixkit-losing-bleeps-2026.wav')
// let buttonsRow6 = document.getElementsByClassName('key6')
// for (let i = 0; i < buttonsRow6.length; i++) {
//     buttonsRow6[i].addEventListener('click', soundplayer)
//     function play(){

//}
//
// }



let buttons = document.getElementsByClassName('key')

let copiedButtons = Array.from(buttons)
// console.log(copiedButtons)
copiedButtons.forEach((ele) => {
    ele.addEventListener("click", soundplayer)
})
function soundplayer(event) {
    console.log(event.target)
    const row = findRow(event.target)
    console.log(event.target)
    console.log(row)
    let audio = new Audio(row)
    console.log(audio)
    audio.playbackRate = 3
    audio.play()
}

function findRow(button){
    let parent = button.parentElement 
    let rowNumber = parent.classList[1]

    if(rowNumber == 'first'){
        return 'sounds/mixkit-single-key-type-2533.wav'
    }else if (rowNumber == 'second'){
        return 'sounds/mixkit-short-guitar-riff-2322.wav'
    }else if (rowNumber == 'third'){
        return 'sounds/mixkit-message-pop-alert-2354.mp3'
    }else if (rowNumber == 'fourth'){
        return 'sounds/mixkit-fast-air-sweep-transition-168.wav'
    }else if (rowNumber == 'fifth'){
        return 'sounds/mixkit-happy-guitar-chords-2319.wav'
    }else if (rowNumber == 'sixth'){
        return 'sounds/mixkit-losing-bleeps-2026.wav'
    } 
}


    // function play(audio) {
    //     audio.playbackRate = 3
    //     audio.play()
    // }