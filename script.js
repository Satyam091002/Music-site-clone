console.log("Welcome to Spotify");

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let MasterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Mass-Adi", filePath:"songs/1.mp3",coverPath: "cover/cover1.jpg"},
    {songName: "Kuchh Khas", filePath:"songs/2.mp3",coverPath: "cover/cover2.jpg"},
    {songName: "Tum Ho", filePath:"songs/3.mp3",coverPath: "cover/cover3.jpg"},
    {songName: "Galliyan", filePath:"songs/4.mp3",coverPath: "cover/cover4.jpeg"},
    {songName: "Humdard", filePath:"songs/5.mp3",coverPath: "cover/cover5.jpg"},
    {songName: "Yeh Aaina", filePath:"songs/6.mp3",coverPath: "cover/cover6.jpg"},
    {songName: "Ruan", filePath:"songs/7.mp3",coverPath: "cover/cover7.jpg"},
    {songName: "Dhan te Nan", filePath:"songs/8.mp3",coverPath: "cover/cover8.jpg"},
    {songName: "Wo Ladki", filePath:"songs/9.mp3",coverPath: "cover/cover9.jpg"},
    {songName: "Aaj Phir", filePath:"songs/10.mp3",coverPath: "cover/cover10.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});
// audioElement.play();
console.log(myProgressBar);
console.log(MasterPlay);
MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        makeAllPlay();
        songIndex=(parseInt(e.target.id));
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
}
)
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
}
)