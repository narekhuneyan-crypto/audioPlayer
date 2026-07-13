let data = {
    title: [
        "Ludwig Van Beethoven-Symphony",
        "Ludwig Van Beethoven-Moonlight Sonata",
        "Ludwig Van Beethoven-Fur Elise",
        "The Irrepressibles-In This Shirt",
        "Vanotek-Promised Land",
        "Ennio Morricone-Le Vent,Le Cri"
    ],
    song: [
        "music/Ludwig Van Beethoven-Symphony.mp3",
        "music/Ludwig Van Beethoven-Moonlight Sonata.mp3",
        "music/Ludwig Van Beethoven-Fur Elise.mp3",
        "music/The Irrepressibles-In This Shirt.mp3",
        "music/Vanotek-Promised Land.mp3",
        "music/Ennio Morricone-Le Vent,Le Cri.mp3"
    ],
    poster: [
        "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyc3d5ZHJiaTU2eThucWlub2VocmpiYXpnOHRneThxaGg1eDJmY210cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Yl5nlnrtpQIrI1AfhD/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyc3d5ZHJiaTU2eThucWlub2VocmpiYXpnOHRneThxaGg1eDJmY210cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Yl5nlnrtpQIrI1AfhD/giphy.gif",
        "https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyc3d5ZHJiaTU2eThucWlub2VocmpiYXpnOHRneThxaGg1eDJmY210cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Yl5nlnrtpQIrI1AfhD/giphy.gif",
        "https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif",
        "https://i.pinimg.com/originals/3e/fe/1c/3efe1cb845954233246f60d5d8395dd0.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyeWh6OTV1NnhtemN6djJ5eG51YzJkcjB1dGU1NXBscW8yamhzemU5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tqfS3mgQU28ko/200w.gif"

    ]
}


let song = new Audio()
let currentSong = 0

window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong]

    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]

    let img = document.getElementById("row1")
    img.style.backgroundImage = "url (" + data.poster[currentSong] + ")"

    let main = document.getElementById("main")
    main.style.backgroundImage = "url (" + data.poster[currentSong] + ")"
    song.play()

}

function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"
    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}