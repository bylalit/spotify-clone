// console.log("Hello welcome the spotify");

// let songIndex = 0;
// let masterPlay = document.getElementById("masterPlay");
// let audioElement = new Audio("1.mp3");
// let myProgressBar = document.getElementById("myProgressBar");
// let gif = document.getElementById("gif");

let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "song/1.mp3",
    coverPath: "covers/1.path",
  },
];

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
  console.log("timeupdate");
});
