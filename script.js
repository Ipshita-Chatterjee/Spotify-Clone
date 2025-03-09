console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./Songs/White_Mustang.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.querySelector('.masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "White Mustang", filepath: "./Songs/White_Mustang.mp3", coverPath: "./Covers/Cover1.jpg"},
    {songName: "Dark Paradise", filepath: "./Songs/Dark_Paradise.mp3", coverPath: "./Covers/Cover2.jpg"},
    {songName: "Ultraviolence", filepath: "./Songs/Ultraviolence.mp3", coverPath: "./Covers/Cover3.jpg"},
    {songName: "Art Deco", filepath: "./Songs/Art_Deco.mp3", coverPath: "./Covers/Cover4.jpg"},
    {songName: "Born To Die", filepath: "./Songs/Born_To_Die.mp3", coverPath: "./Covers/Cover5.jpg"},
    {songName: "Cinnamon Girl", filepath: "./Songs/Cinnamon_Girl.mp3", coverPath: "./Covers/Cover6.jpg"},
    {songName: "Brooklyn Baby", filepath: "./Songs/Brooklyn_Baby.mp3", coverPath: "./Covers/Cover7.jpg"}
];

// Function to reset all play buttons
const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

// Handle play/pause click on master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    if (!isNaN(audioElement.duration)) { // Prevent NaN errors
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress;
    }
});

// Seekbar control
myProgressBar.addEventListener('input', () => {
    if (!isNaN(audioElement.duration)) {
        audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
    }
});

// Reset play icon when song ends and play next song
audioElement.addEventListener('ended', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop to next song
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlays();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

// Play selected song when its play button is clicked
songItemPlay.forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); // Reset all play buttons
        songIndex = i;
        
        // Set new song source
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();

        // Update UI
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

// Previous song button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1; // Loop back to the last song
    } else {
        songIndex -= 1;
    }
    
    // Set new song source
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update UI
    makeAllPlays();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});

// Next song button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    
    // Set new song source
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update UI
    makeAllPlays();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});
