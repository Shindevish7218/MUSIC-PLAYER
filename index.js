var playButton = document.getElementById("play-btn");
var pauseButton = document.getElementById("pause-btn")
var audioPlayer = document.getElementById("audio-player")
var progressBar  = document.getElementById("progress-bar")
var forwardButton = document.getElementById("+10")
var backwardButton = document.getElementById("-10")
var halfSpeed =  document.getElementById("*0.5")
var doubleSpeed =   document.getElementById("*2")
var normalSpeed =   document.getElementById("*1")



playButton.addEventListener("click" , function () {
    // alert("Button clicked")

    // console.log( audioPlayer.duration )
    
    audioPlayer.play();
} )

pauseButton.addEventListener("click" , function () {
    audioPlayer.pause();
} )

audioPlayer.addEventListener( "timeupdate" , function () {
            console.log("Music playing")
            console.log( audioPlayer.buffered.end(0) )
            if( audioPlayer.currentTime < 50 ){
                progressBar.style.backgroundColor = "red"
            }else if( audioPlayer.currentTime > 50 && audioPlayer.currentTime < 100  ){
                progressBar.style.backgroundColor = "yellow"
            }else{
                progressBar.style.backgroundColor = "green"
            }
            progressBar.style.width = (audioPlayer.currentTime  / audioPlayer.duration) * 100 + "%"
} )

forwardButton.addEventListener("click" , function () {
    audioPlayer.currentTime = audioPlayer.currentTime + 10
} )

backwardButton.addEventListener( "click" , function () {
    audioPlayer.currentTime = audioPlayer.currentTime - 10

} )

halfSpeed.addEventListener("click" , function () {
    audioPlayer.playbackRate = 0.5
} )

doubleSpeed.addEventListener("click" , function() {
    audioPlayer.playbackRate = 2
} )

normalSpeed.addEventListener("click" , function () {
    audioPlayer.playbackRate = 1
} )