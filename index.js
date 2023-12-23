let audio = new Audio("1.mp3");


//play & pause event :
function play() {
    let plays = document.getElementById('plays');
    let gif = document.getElementById('gif');
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        plays.src = "pause.jpeg";
        gif.style.opacity = 1;
    }
    else {
        audio.pause();
        plays.src = "play.png";
        gif.style.opacity = 0;
    }
}
audio.addEventListener('timeupdate', () => {
    audioProgress = parseInt((audio.currentTime / audio.duration) * 100);
    document.getElementById('progressBar').value = audioProgress;
})

function moveProgressBar(){
    let progressBar = document.getElementById('progressBar');
    progressBar.addEventListener('change', () => {
        progressBar.position = progressBar.value;
        audio.currentTime = (progressBar.value * audio.duration) / 100;
    })
}



