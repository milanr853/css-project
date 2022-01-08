// ---------------------------VARIABLES-----------------------------------
let volume = document.querySelector('#range')
let songProgressBar = document.querySelector('#songProgress')
let playBtn = document.querySelector('.fa-play')
let forward = document.querySelector('.fa-step-forward')
let backward = document.querySelector('.fa-step-backward')

let mobile = document.querySelector('.fa-mobile-alt')
let compress = document.querySelector('.fa-compress-alt')
let mute = document.querySelector('.fa-volume-up')

let counter = 0
let newWindow;

audioPlay = new Audio('gnat.mp3')

// --------------------------EVENT LISTENERS------------------------------------

playBtn.addEventListener('click', playMusic)

songProgressBar.addEventListener('change', setProgress)

volume.addEventListener('change', volChange)

forward.addEventListener('click',palyForward)

backward.addEventListener('click',palyBackward)

compress.addEventListener('click',compressScreen)

mobile.addEventListener('click',mobileScreen)

mute.addEventListener('click',muteAudio)

defaultAction()

cursor()

// ---------------------------FUNCTIONS-----------------------------------

function playMusic() {
    setProgress()

    counter += 1
    if (counter % 2 != 0) {
        audioPlay.play()
        playBtn = document.querySelector('.fa-play')
        playBtn.classList.replace('fa-play', 'fa-pause-circle')
        playBtn.style.fontSize = '2.5vmax'
        playBtn.style.cursor = 'pointer'
    }
// ------------------------------------
    if (counter % 2 == 0) {
        audioPlay.pause()
        playBtn = document.querySelector('.fa-pause-circle')
        playBtn.classList.replace('fa-pause-circle', 'fa-play')
        playBtn.style.fontSize = '2.5vmax'
        playBtn.style.cursor = 'pointer'
    }

    audioPlay.volume = '0.35'
    volume.value = 35
}

function volChange() {
    audioPlay.volume = `${(volume.value) / 100}`
}

function setProgress() {
    songProgressBar.setAttribute('max', `${audioPlay.duration}`)
    audioPlay.currentTime = `${songProgressBar.value}`

    let interval = setInterval(() => {
    songProgressBar.value = audioPlay.currentTime

    try{if (songProgressBar.value == JSON.stringify(Math.floor(audioPlay.duration))) {
        songProgressBar.value = 0
        // -------------------------
            clearInterval(interval)
        // -------------------------
        audioPlay.volume = '0.35'
        volume.value = 35
        playBtn = document.querySelector('.fa-pause-circle')
        playBtn.classList.replace('fa-pause-circle', 'fa-play')
        playBtn.style.fontSize = '2.5vmax'
        playBtn.style.cursor = 'pointer'
        counter = 0
        // -------------------------
        }}

    catch{console.log()}
    }, 1000);

}

function palyForward(){
    audioPlay.currentTime = audioPlay.currentTime + 5
}

function palyBackward(){
    audioPlay.currentTime = audioPlay.currentTime - 5
}

function cursor(){
    forward.style.cursor = 'pointer'
    backward.style.cursor = 'pointer'
    compress.style.cursor = 'pointer'
    mobile.style.cursor = 'pointer'
    mute.style.cursor = 'pointer'
}

function defaultAction(){
    songProgressBar.value = 0
}

function compressScreen(){
        newWindow = window.open('http://127.0.0.1:5500/css%20major/index.html','','width=900, height=725')
        newWindow.focus()
}

function mobileScreen(){
    newWindow = window.open('http://127.0.0.1:5500/css%20major/index.html','','width=460, height=700')
    newWindow.focus()
}

function muteAudio(){
    audioPlay.volume = 0
    volume.value = 0
}
// This JS is for Bottom Music Player Only