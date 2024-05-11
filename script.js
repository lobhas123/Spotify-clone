console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    { songName: "Warriyo- Mortals", filePath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "cover/2.jpg" },
    { songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "cover/3.jpg" },
    { songName: "Different Heaven & Ehide - My Heart ", filePath: "songs/4.mp3", coverPath: "cover/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "cover/5.jpg" },
    { songName: "song6", filePath: "songs/6.mp3", coverPath: "cover/6.jpg" },
    { songName: "song7", filePath: "songs/7.mp3", coverPath: "cover/7.jpg" },
    { songName: "song8", filePath: "songs/8.mp3", coverPath: "cover/8.jpg" },
    { songName: "song9", filePath: "songs/9.mp3", coverPath: "cover/9.jpg" },
    { songName: "song10", filePath: "songs/10.mp3", coverPath: "cover/10.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songNames')[0].innerHTML=songs[i].songName;

});
// audioElement.play();
//Handle play/pause click
if(masterPlay){
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})}
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3` ;
        audioElement.currentTime = 0;
        audioElement.play();
        if(masterPlay){
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        }
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
    songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
    audioElement.currentTime = 0;
    audioElement.play();
    if(masterPlay){
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')}
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0
    }
    else{
    songIndex-=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
    audioElement.currentTime = 0;
    audioElement.play();
    if(masterPlay){
    masterPlay.classList.remove('fa-circle-play')}
    masterPlay.classList.add('fa-circle-pause')
})

