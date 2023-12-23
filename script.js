let songindex = 0;
let audio = new Audio("song/1.mp3");
let play = document.getElementById("play");
let pro = document.getElementById("pro");
let gif = document.getElementById("gif");
let songname = document.getElementById("n");
let image = document.querySelector(".image")
// let songitem = document.getElementsByClassName("songitem");
let back = document.querySelector(".songbox");
let song = document.querySelector(".songlist");
let son = document.querySelectorAll(".songs");
let h1 = document.querySelector("h1");
let button = document.querySelector("button");
let icon = document.querySelector("i");
let div = document.getElementById("all");
let h5 = document.querySelector("h5");
let a = document.getElementById("back")
let b = document.getElementById("for")
let dl = document.getElementById("dl");
let time = document.getElementById("h5");
let drop = document.getElementById("drop");
let p=document.querySelector("p");

let songs = [
    { songname: "Tu Hai Kahan", filepath: "song/1.mp3", coverpath: "img/song1.jpg", time: "04:24" },
    { songname: "Jamalu Gudu", filepath: "song/2.mp3", coverpath: "img/song2.jpg", time: "02:14" },
    { songname: "Kisi din ba..", filepath: "song/3.mp3", coverpath: "img/song3.jpg", time: "07:18" },
    { songname: "Raanjhan Aaya", filepath: "song/4.mp3", coverpath: "img/song4.jpg", time: "02:43" },
    { songname: "Ennodu Ne..", filepath: "song/5.mp3", coverpath: "img/song5.jpg", time: "05:52" },
    { songname: "Chaleya(fr..", filepath: "song/6.mp3", coverpath: "img/song6.jpg", time: "03:08" },
    { songname: "Heeriye", filepath: "song/7.mp3", coverpath: "img/songH.jpg", time: "03:15" },
    { songname: "Mehrama", filepath: "song/8.mp3", coverpath: "img/song7.jpg", time: "04:09" },
    { songname: "Baarishein", filepath: "song/9.mp3", coverpath: "img/song8.jpg", time: "03:27" },
    { songname: "Kahani suno", filepath: "song/10.mp3", coverpath: "img/song9.jpg", time: "02:53" },
    { songname: "Teri yaadon", filepath: "song/11.mp3", coverpath: "img/song10.jpg", time: "04:26" },
    { songname: "Ek lamha", filepath: "song/12.mp3", coverpath: "img/song11.jpg", time: "06:34" },
    { songname: "Dil ibadat", filepath: "song/13.mp3", coverpath: "img/song12.jpg", time: "05:29" },
    { songname: "Meri jaan", filepath: "song/14.mp3", coverpath: "img/song13.jpg", time: "03:15" },
    { songname: "Hum tou d..", filepath: "song/15.mp3", coverpath: "img/song14.jpg", time: "03:01" },
];

play.addEventListener("click", () => {
    if (audio.paused || audio.ended) {
        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        audio.play();
        back.classList.add("ani")
        image.classList.add("im")

        // songindex = parseInt(e.target.id);
        time.innerText = songs[songindex - 1].time;
    } else {
        play.classList.add("fa-play-circle");
        play.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
        back.classList.remove("ani")
        image.classList.remove("im")
        audio.pause();
    }
});


audio.addEventListener("timeupdate", () => {
    const progress = parseInt((audio.currentTime / audio.duration) * 100);
    pro.value = progress;

    const currentTimeMinutes = Math.floor(audio.currentTime / 60);
    const currentTimeSeconds = Math.floor(audio.currentTime % 60);
    document.querySelector("h5").innerText = `${currentTimeMinutes}:${currentTimeSeconds.toString().padStart(2, '0')}`;
});

pro.addEventListener("change", () => {
    audio.currentTime = pro.value * audio.duration / 100;
});



Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplay();
        songindex = parseInt(e.target.id);
        // e.target.classList.remove("fa-play-circle");
        // e.target.classList.add("fa-pause-circle");


        play.classList.remove("fa-play-circle");
        play.classList.add("fa-pause-circle");
        audio.src = `song/${songindex}.mp3`
        image.classList.add("im");
        image.classList.add("ro");
        back.classList.add("ani");

        audio.currentTime = 0
        audio.play();
        time.innerText = songs[songindex - 1].time;
        songname.innerText = songs[songindex - 1].songname;
        songname.style.fontWeight = "bold"
        songname.style.fontSize = "18px"
        image.style.backgroundImage = `url(${songs[songindex - 1].coverpath})`;
    });
});

const makeallplay = () => {
    play.classList.add("fa-play-circle");
    play.classList.remove("fa-pause-circle");

    play.classList.remove("fa-play-circle");
    play.classList.add("fa-pause-circle");

    Array.from(document.getElementsByClassName("songitem")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    });
};

document.getElementById("for").addEventListener("click", () => {
    if (songindex >= songs.length) {
        songindex = 1;
    } else {
        songindex += 1;
    }

    audio.src = `song/${songindex}.mp3`;
    audio.currentTime = 0;
    audio.play();
    songname.style.fontWeight = "bold"
    songname.style.fontSize = "18px"

    time.innerText = songs[songindex - 1].time;
    songname.innerText = songs[songindex - 1].songname;
    image.style.backgroundImage = `url(${songs[songindex - 1].coverpath})`;
});

document.getElementById("back").addEventListener("click", () => {
    if (songindex <= 1) {
        songindex = songs.length;
    } else {
        songindex -= 1;
    }

    audio.src = `song/${songindex}.mp3`;
    audio.currentTime = 0;
    audio.play();
    time.innerText = songs[songindex - 1].time;
    songname.style.fontWeight = "bold"
    songname.style.fontSize = "18px"
    songname.innerText = songs[songindex - 1].songname;
    image.style.backgroundImage = `url(${songs[songindex - 1].coverpath})`;
});


let i = 0
function light() {
    if (i == 0) {
        back.style.backgroundColor = "black";
        song.style.backgroundColor = "black"
        a.style.color = "white";
        b.style.color = "white";
        play.style.color = "white";
        songname.style.color = "white";
        dl.classList.add("fa-cloud-sun");
        dl.classList.remove("fa-cloud-moon");
        h1.style.color = "white";
        h5.style.color = "white"
        time.style.color = "white"
        button.style.backgroundColor = "black";
        button.style.color = "white";
        i = 1
    }
    else {

        document.body.style.backgroundColor = "black";
        back.style.backgroundColor = "white";
        song.style.backgroundColor = "white";
        a.style.color = "black";
        b.style.color = "black";
        play.style.color = "black";
        songname.style.color = "black";
        dl.classList.remove("fa-cloud-sun");
        dl.classList.add("fa-cloud-moon");
        h1.style.color = "black";
        h5.style.color = "black"
        time.style.color = "black"
        button.style.color = "black";
        button.style.backgroundColor = "white";
        i = 0
    }

}


drop.addEventListener("click", () => {
    if(i==0){
    song.style.display="block";
    song.style.position="absolute"
    h1.style.color = "white";
    song.style.backgroundColor=" black"
    song.style.padding=" 10px 20px"
    song.style.borderRadius=" 15px"
    song.style.color=" white"
    song.style.zIndex="1"
    i=1
    }
    else{
        
    song.style.display="none";
    i=0
    }
})