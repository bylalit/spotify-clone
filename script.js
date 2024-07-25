console.log("Hello welcome the spotify");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "clipe/covers/1.path",
  },
  {
    songName: "Salam-e-Ishq 2",
    filePath: "clipe/song/2.mp3",
    coverPath: "clipe/covers/2.path",
  },
  {
    songName: "Salam-e-Ishq 3",
    filePath: "clipe/song/3.mp3",
    coverPath: "clipe/covers/3.path",
  },
  {
    songName: "Salam-e-Ishq 4",
    filePath: "clipe/song/4.mp3",
    coverPath: "covers/4.path",
  },
  {
    songName: "Salam-e-Ishq 5",
    filePath: "clipe/song/5.mp3",
    coverPath: "clipe/covers/5.path",
  },
  {
    songName: "Salam-e-Ishq 6",
    filePath: "clipe/song/6.mp3",
    coverPath: "clipe/covers/6.path",
  },
  {
    songName: "Salam-e-Ishq 7",
    filePath: "clipe/song/7.mp3",
    coverPath: "clipe/covers/7.path",
  },
  {
    songName: "Salam-e-Ishq 8",
    filePath: "clipe/song/8.mp3",
    coverPath: "clipe/covers/8.path",
  },
  {
    songName: "Salam-e-Ishq 9",
    filePath: "clipe/song/9.mp3",
    coverPath: "clipe/covers/9.path",
  },
  {
    songName: "Salam-e-Ishq 0",
    filePath: "clipe/song/10.mp3",
    coverPath: "clipe/covers/10.path",
  },
];


songs.forEach

// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log("timeupdate");
  progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
  // console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
