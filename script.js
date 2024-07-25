console.log("Hello welcome the spotify");

let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio("clipe/songs/1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");

let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "clipe/songs/1.mp3",
    coverPath: "clipe/covers/1.jpg",
  },
  {
    songName: "Salam-e-Ishq 2",
    filePath: "clipe/songs/2.mp3",
    coverPath: "clipe/covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq 3",
    filePath: "clipe/songs/3.mp3",
    coverPath: "clipe/covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq 4",
    filePath: "clipe/songs/4.mp3",
    coverPath: "clipe/covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq 5",
    filePath: "clipe/songs/5.mp3",
    coverPath: "clipe/covers/5.jpg",
  },
  {
    songName: "Salam-e-Ishq 6",
    filePath: "clipe/songs/6.mp3",
    coverPath: "clipe/covers/6.jpg",
  },
  {
    songName: "Salam-e-Ishq 7",
    filePath: "clipe/songs/7.mp3",
    coverPath: "clipe/covers/7.jpg",
  },
  {
    songName: "Salam-e-Ishq 8",
    filePath: "clipe/songs/8.mp3",
    coverPath: "clipe/covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq 9",
    filePath: "clipe/songs/9.mp3",
    coverPath: "clipe/covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq 10",
    filePath: "clipe/songs/10.mp3",
    coverPath: "clipe/covers/10.jpg",
  },
];


songItem.forEach((element, i) =>{
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

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


const masteAllPlays = ()=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
  element.addEventListener("click", (e)=>{
    // console.log(e.target);
    masteAllPlays();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
  })
});